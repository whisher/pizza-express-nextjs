const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = [
  {
    name: "Classiche",
    products: {
      create: [
        {
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in sodales lectus. Aliquam magna sapien, hendrerit at ornare vel, vulputate ut velit. Praesent consequat fermentum justo sed sodales.",
          image: "pizza-funghi.jpg",
          name: "Pizza ai Funghi",
          price: 800,
          slug: "pizza-ai-funghi"
        },
        {
          description:
            "Duis sit amet justo quis metus posuere rutrum condimentum eu nibh. Sed ornare, risus vel mollis dictum, nulla arcu tincidunt nulla, non varius nulla massa nec velit.",
          image: "pizza-margherita.jpg",
          name: "Pizza Margherita",
          price: 630,
          slug: "pizza-margherita"
        },
        {
          description:
            "Vestibulum molestie ligula vel sagittis ultricies. Sed massa purus, accumsan nec feugiat sit amet, condimentum nec sem. Vivamus id dignissim lorem, nec placerat metus. Proin tincidunt metus varius nisl ornare, sed elementum magna egestas.",
          image: "pizza-marinara.jpg",
          name: "Pizza Marinara",
          price: 720,
          slug: "pizza-marinara"
        },
        {
          description:
            "Mauris tincidunt vehicula ipsum, at ullamcorper velit tristique at. Aliquam aliquet in risus quis tristique. Proin in blandit orci. Fusce quis tristique ipsum.",
          image: "pizza-quattro-stagioni.jpg",
          name: "Pizza Quattro Stagioni",
          price: 950,
          slug: "pizza-quattro-stagioni"
        }
      ]
    }
  },
  {
    name: "Speciali",
    products: {
      create: [
        {
          description:
            "Quisque eu rhoncus elit, a tincidunt lectus. Etiam turpis nunc, pellentesque vel varius vel, laoreet a ante. Nullam lacinia a elit id faucibus.",
          image: "pizza-amalfi.jpg",
          name: "Pizza Amalfi",
          price: 870,
          slug: "pizza-amalfi"
        },
        {
          description:
            "Mauris vehicula, erat vitae imperdiet faucibus, eros tortor rhoncus turpis, quis sollicitudin lorem tortor eget nibh. Praesent a tortor sodales nunc fringilla pretium ullamcorper quis tortor.",
          image: "pizza-bufala.jpg",
          name: "Pizza con Bufala",
          price: 680,
          slug: "pizza-con-bufala"
        },
        {
          description:
            "Pellentesque quam nibh, dapibus a diam et, congue ornare nisl. Sed sem mi, iaculis vulputate finibus non, efficitur non nisl. Donec dolor lectus, mollis sit amet quam id, gravida ultrices quam.",
          image: "pizza-contadina.jpg",
          name: "Pizza Contadina",
          price: 750,
          slug: "pizza-contadina"
        },
        {
          description:
            "Integer nec libero nulla. Ut pellentesque mi eu justo ultricies, eget dapibus dui ultrices. Ut dapibus accumsan nisl id euismod. Quisque lobortis, ligula a commodo iaculis, lorem urna convallis risus, sit amet venenatis mauris diam et lorem.",
          image: "pizza-patata.jpg",
          name: "Pizza Patata",
          price: 910,
          slug: "pizza-patata"
        }
      ]
    }
  }
];
const seed = () => {
  const inserts = categories.map((category) => {
    return prisma.category.create({
      data: category
    });
  });

  return Promise.all(inserts);
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
