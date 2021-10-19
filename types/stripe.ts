export interface StripePaymentIntentDto {
  publishableKey: string;
  paymentIntent: string | null;
}
