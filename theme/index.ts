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
        // 1. We can update the base styles
        baseStyle: {
          color: "white" // Normally, it is "semibold"
        },
        // 3. We can add a new visual variant
        variants: {
          cart: {
            bg: "orange.400"
          }
        }
      },
      Link: {
        baseStyle: {
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
