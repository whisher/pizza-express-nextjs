import type { NextApiRequest, NextApiResponse } from "next";
import type { ErrorDto, StripePaymentIntentDto } from "../../../types";
import { getSession } from "next-auth/client";
import Stripe from "stripe";
import prisma from "../../../util/prisma";
const stripeSecret = process.env.STRIPE_SECRET;
const stripePublic = process.env.NEXT_PUBLIC_STRIPE_PUBLIC;
if (!stripeSecret || !stripePublic) {
  throw new Error("Stripe config is missing");
}
const stripe = new Stripe(stripeSecret, {
  apiVersion: "2020-08-27"
});
const checkout = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorDto | StripePaymentIntentDto>
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const cart = req?.body?.cart || {};
  const productIds = Object.keys(cart);
  if (productIds.length === 0) {
    return res.status(422).json({ message: "The Cart can be empty" });
  }
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds
      }
    },
    select: {
      id: true,
      price: true
    }
  });

  let total = 0;
  products.forEach((product) => {
    total += product.price * cart[product.id].quantity;
  });

  // payment intent
  const paymentIntent: Stripe.Response<Stripe.PaymentIntent> =
    await stripe.paymentIntents.create({
      amount: total,
      currency: "eur"
    });

  return res.status(200).json({
    publishableKey: stripePublic,
    paymentIntent: paymentIntent.client_secret
  });
};

export default checkout;
