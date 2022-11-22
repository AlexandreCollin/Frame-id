import { extendTheme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    rounded: "full",
    _active: { transform: "scale(0.95)" },
  },
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
    "2xl": {
      h: "64px",
      fontSize: "xl",
      px: "44px",
    },
  },
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000000",
        color: "gray.800",
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: { Button },
  fonts: {
    body: 'Inter, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    heading:
      'Inter, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    primary: {
      500: "#8f94fb",
    },
    secondary: {
      500: "#4e54c8",
    },
  },
  shadows: {
    outline: "0 0 0 3px rgba(252, 112, 133, 0.6)",
  },
});

export default theme;
