import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import Logo from "../../assets/Logo.svg";
import Github from "../../assets/Github.svg";
import X from "../../assets/X.svg";
import Discord from "../../assets/Discord.svg";

import Links from "../../links";

const socialIconStyle = {
  padding: "6px",
  borderRadius: "999px",
  background: "rgba(255, 255, 255, 0.04)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          borderEndStartRadius: {
            xs: "0",
            md: "16px",
          },
          borderEndEndRadius: {
            xs: "0",
            md: "16px",
          },
          background: "#0A0F10",
          backdropFilter: "blur(42px)",
          padding: {
            xs: "5px 0",
            md: "12px 0",
          },
          boxShadow: "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box mr={4}>
                <Fade triggerOnce={true} direction="down">
                  <Logo />
                </Fade>
              </Box>

              <Box
                gap={0.5}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  alignItems: "center",
                }}
              >

                <Fade triggerOnce={true} direction="down" cascade={true} delay={500}>
                  <Link
                    href={Links.GITHUB}
                    target="_blank"
                    sx={socialIconStyle}
                  >
                    <Github />
                  </Link>
                  <Link href={Links.X} target="_blank" sx={socialIconStyle}>
                    <X />
                  </Link>
                  <Link
                    href={Links.DISCORD}
                    target="_blank"
                    sx={socialIconStyle}
                  >
                    <Discord />
                  </Link>
                  </Fade>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                maxHeight: {
                  xs: "43px",
                  md: "unset",
                },
              }}
            >
              <Fade triggerOnce={true} direction="down" delay={2300}>
                <Link href={Links.APP} target="_blank">
                  <Button
                    variant="contained"
                    sx={{
                      padding: "8px 16px",
                      transition: "background 1s",
                      "&:hover": {
                        background: "#29C772"
                      }
                    }}
                  >
                    <Typography variant="button">Launch</Typography>
                    <NorthEastIcon
                      sx={{
                        color: "#0A0C0F",
                      }}
                    />
                  </Button>
                </Link>
              </Fade>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export { Navbar };
