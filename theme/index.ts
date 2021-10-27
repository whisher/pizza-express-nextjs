import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      body: `Montserrat, ${baseTheme.fonts?.body}`,
      heading: `Cabin,  ${baseTheme.fonts?.heading}`
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "gray.600"
        },
        a: {
          color: "orange.500",
          _hover: {
            textDecoration: "none"
          }
        },
        p: {
          color: "gray.600"
        }
      }
    },
    colors: {
      primary: baseTheme.colors.orange,
      secondary: baseTheme.colors.green
    },
    components: {
      Button: {
        baseStyle: {
          color: "white"
        },

        variants: {
          cart: {
            bg: "primary.400"
          }
        }
      },
      Link: {
        baseStyle: {
          color: "primary.400",
          _hover: {
            textDecoration: "none"
          }
        }
      }
    }
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export { theme };
