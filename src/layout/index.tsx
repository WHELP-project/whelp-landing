import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { Navbar } from "../components";
//import Footer from "../components/Footer";

import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "./style.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#44CA83",
    },
  },
  typography: {
    button: {
      color: "#0A0C0F",
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: "none",
    },
    h1: {
      color: "#FFF",
      fontFamily: "Inter",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "40px",
      "@media (min-width:900px)": {
        fontSize: "60px",
        lineHeight: "64px",
      },
    },
    h2: {
      color: "#FFF",
      fontFamily: "Inter",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "32px",
      "@media (min-width:900px)": {
        fontSize: "44px",
        lineHeight: "52px",
      },
    },
    h3: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "32px",
      "@media (min-width:900px)": {
        fontSize: "36px",
        lineHeight: "44px",
      },
    },
    body1: {
      color: "rgba(255, 255, 255, 0.76)",
      fontFamily: "Inter",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          "&.MuiContainer-maxWidthSm": {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1310,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          background:
            "var(--Whelp-button-primary-bg, linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.00) 100%), #44CA83)",
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  spacing: 8,
});

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
