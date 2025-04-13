import { extendTheme } from "@chakra-ui/react";

// Custom VS Code-like color palette
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, // Ensure it sticks to dark mode
  },
  styles: {
    global: {
      // VS Code-like background and text color
      body: {
        bg: "#0A1128", // VS Code dark background color
        color: "#d4d4d4", // VS Code default text color
      },
    },
  },
  colors: {
    // VS Code inspired color tokens
    primary: {
      50: "#e1e4f5",
      100: "#b3b9d2",
      200: "#808caa",
      300: "#4c5f83",
      400: "#2c4168", // Similar to VS Code's sidebar and panel background
      500: "#1e1e1e", // VS Code editor background
      600: "#1a1a1a",
      700: "#151515",
      800: "#101010",
      900: "#0b0b0b",
    },
    text: {
      100: "#d4d4d4", // VS Code default text color
      200: "#9cdcfe", // VS Code bright blue for keywords
      300: "#c586c0", // VS Code purple for strings
      400: "#ce9178", // VS Code orange for variables
      500: "#dcdcaa", // Yellow for constants
    },
  },
});

export default theme;
