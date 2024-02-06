import { Box, Button, Container, Link, Typography } from "@mui/material";
import HeroBg from "../../assets/HeroBg.svg";

import Links from "../../links";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Box
      sx={{
        marginTop: {
          xs: "160px",
          md: "168px",
        },
        mb: 12,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: {
            xs: "0 32px",
            md: "0",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: {
              xs: "-100px",
              md: "20px",
            },
            left: "0",
          }}
        >
          <HeroBg
            style={{
              maxWidth: "100vw",
            }}
          />
        </Box>
        <Fade triggerOnce={true} direction="down">
          <Typography variant="h1" mb={3}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" mb={3}>
            Swap, earn and build on the leading decentralized Cross Chain DeFi
            Hub
          </Typography>
        </Fade>
        <Link
          href={Links.APP}
          target="_blank"
          sx={{
            width: {
              xs: "100%",
              md: "unset",
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: {
                xs: "12px 24px",
                md: "12px 40px",
              },
              width: {
                xs: "100%",
                md: "unset",
              },
              mb: {
                xs: 3,
                md: 8,
              },
              transition: "background 1s",
              "&:hover": {
                background: "#29C772",
              },
            }}
          >
            Launch
          </Button>
        </Link>
        <Box
          component="img"
          sx={{
            maxWidth: {
              xs: "unset",
              md: "100%",
            },
            width: {
              xs: "150vw",
              md: "unset",
            },
            marginLeft: {
              xs: "40vw",
              md: 0,
            },
          }}
          src={"/images/HeroAppPreview.png"}
        />
      </Container>
    </Box>
  );
};

export { Hero };
