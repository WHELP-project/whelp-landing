import { Box, Container, Link, Typography } from "@mui/material";
import Logo from "../../assets/Logo.svg";
import Github from "../../assets/Github.svg";
import X from "../../assets/X.svg";
import Discord from "../../assets/Discord.svg";

import Links from "../../links";

const IconBoxStyle = {
  height: "36px",
  width: "36px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "var(--Whelp-bg-alpha-25, rgba(255, 255, 255, 0.04))",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
};

const IconDivider = () => (
  <Box
    sx={{
      height: "16px",
      width: "1px",
      background: "rgba(255, 255, 255, 0.10)",
      mr: 1,
      ml: 1,
    }}
  />
);

const CopyrightBox = ({type}: {type: "xs" | "md"}) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: "12px",
      lineHeight: "16px",
      borderRadius: "999px",
      border:
        "1px solid var(--Whelp-stroke-primary, rgba(255, 255, 255, 0.10))",
      background:
        "var(--Whelp-bg-primary, radial-gradient(52.99% 50% at 52.99% 50%, rgba(67, 199, 129, 0.20) 0%, rgba(10, 11, 15, 0.00) 100%), radial-gradient(99.73% 84.28% at 45.45% 13.09%, rgba(69, 202, 131, 0.06) 0%, rgba(7, 9, 12, 0.00) 100%), #08090D)",
      boxShadow: "0px -1px 2px 0px rgba(68, 202, 131, 0.50) inset",
      padding: "10px 16px",
      display: {
        xs: type === "xs" ? "block" : "none",
        md: type === "md" ? "block" : "none"
      }
    }}
  >
    Copyright © {new Date().getFullYear()} Whelp. All rights reserved.
  </Typography>
);

const Footer = () => {
  return (
    <footer>
      <Container
        sx={{
          pt: {
            xs: 12,
            md: 20,
          },
          padding: "24px 0",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: {
            xs: "unset",
            md: "space-between",
          },
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            mb: {
              xs: 7,
              md: 0,
            },
          }}
        >
          <Logo />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              height: "16px",
              width: "1px",
              background: "rgba(255, 255, 255, 0.10)",
              mr: 3,
              ml: 3,
            }}
          />
          <CopyrightBox type="md" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "999px",
            border:
              "1px solid var(--Whelp-stroke-primary, rgba(255, 255, 255, 0.10))",
            background:
              "var(--Whelp-bg-primary, radial-gradient(52.99% 50% at 52.99% 50%, rgba(67, 199, 129, 0.20) 0%, rgba(10, 11, 15, 0.00) 100%), radial-gradient(99.73% 84.28% at 45.45% 13.09%, rgba(69, 202, 131, 0.06) 0%, rgba(7, 9, 12, 0.00) 100%), #08090D)",
            boxShadow: "0px -1px 2px 0px rgba(68, 202, 131, 0.50) inset",
            padding: "4px",
            mb: {
              xs: 7,
              md: 0
            }
          }}
        >
          <Link href={Links.GITHUB} target="_blank" sx={IconBoxStyle}>
            <Github style={{ maxWidth: "24px" }} />
          </Link>
          <IconDivider />
          <Link href={Links.X} target="_blank" sx={IconBoxStyle}>
            <X style={{ maxWidth: "24px" }} />
          </Link>
          <IconDivider />
          <Link href={Links.DISCORD} target="_blank" sx={IconBoxStyle}>
            <Discord style={{ maxWidth: "24px" }} />
          </Link>
        </Box>
        <CopyrightBox type="xs" />
      </Container>
    </footer>
  );
};

export { Footer };
