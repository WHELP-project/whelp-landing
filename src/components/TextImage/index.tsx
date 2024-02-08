import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Divider from "../../assets/Divider.svg";
import { Fade, Slide } from "react-awesome-reveal";

const ButtonStyle = {
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.10)",
  background: "rgba(255, 255, 255, 0.02)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.02)",
    borderColor:
      "1px solid var(--Whelp-stroke-secondary, rgba(255, 255, 255, 0.10))",
  },
  color: "#FFF",
  padding: "12px 24px",
  width: {
    xs: "100%",
    md: "unset",
  },
};

const imageStyle = {
  border: "1px solid #FFFFFF1A",
  borderRadius: "16px",
  maxHeight: "328px",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
};

const TextImage = () => {
  return (
    <Box
      sx={{
        mb: {
          xs: 12,
          md: 24,
        },
        mt: {
          xs: -7,
          md: 0
        }
      }}
    >
      <Container>
        <Box
          sx={{
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
            background: "#0A0F10",
            padding: {
              xs: "24px",
              md: "84px",
            },
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              flexDirection: {
                xs: "reverse-row",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={6}>
              <Fade
                triggerOnce={true}
                direction="left"
                cascade={true}
                damping={0.2}
              >
                <Typography variant="h2" mb={3}>
                  Swap Tokens
                </Typography>
                <Typography variant="body1" mb={3}>
                  Whelp DEX enables seamless swapping and liquidity provision
                  for smart tokens, allowing users to access the vibrant DeFi
                  ecosystem on Coreum and Cosmos with ease.
                </Typography>
                <Button target="_blank" href="https://app.whelp-hub.io/swap" sx={ButtonStyle}>Learn More</Button>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade triggerOnce={true} direction="right">
                <Box sx={imageStyle}>
                  <Box
                    component="img"
                    src={"/images/TextImageBg1.png"}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          </Grid>

          <Box
            mb={8}
            mt={7}
            sx={{
              maxWidth: "100%",
              overflowX: "hidden",
            }}
          >
            <Divider />
          </Box>

          <Grid container spacing={3} className="reverseGrid">
            <Grid item xs={12} md={6}>
              <Fade triggerOnce={true} direction="left">
                <Box sx={imageStyle}>
                  <Box
                    component="img"
                    src={"/images/TextImageBg2.png"}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade
                triggerOnce={true}
                direction="right"
                cascade={true}
                damping={0.2}
              >
                <Typography variant="h2" mb={3}>
                  Whelp's Vision
                </Typography>
                <Typography variant="body1" mb={3}>
                  Whelp will implement a hub of DeFi protocols that synergize and drive value to the ecosystem, offering a comprehensive suite of financial tools and services to empower users and facilitate the evolution of decentralized finance on both Coreum and Cosmos blockchains.
                </Typography>
                <Button sx={ButtonStyle} disabled>Learn More</Button>
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export { TextImage };
