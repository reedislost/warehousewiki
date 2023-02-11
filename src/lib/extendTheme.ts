import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    Checkbox: {
      parts: ["control"],
      baseStyle: {
        control: {
          bg: "gray.200",
          _checked: {
            bg: "blue.300",
          },
        },
      },
    },
  },

  fonts: {
    heading: `'Noto Sans'`,
    body: `'Noto Sans', 'Helvetica'`,
  },
});

export default theme;
