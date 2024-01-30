import { Box, Button, Container, Typography } from "@mui/material";
import HeroBg from "../../assets/HeroBg.svg";
import HeroAppPreview from "../../images/HeroAppPreview.png";

const Hero = () => {
  return (
    <Box
      sx={{
        marginTop: {
          xs: "112px",
          md: "168px",
        },
        mb: 12
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Box sx={{
          position: "absolute",
          top: {
            xs: "-100px",
            md: "20px"
          },
          left: "0",
        }}>
          <HeroBg style={{
            maxWidth: "100vw"
          }} />
        </Box>
        <Typography variant="h1" mb={3}>Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body1" mb={3}>
          Swap, earn and build on the leading decentralized Cross Chain DeFi Hub
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: {
              xs: "12px 0",
              md: "12px 40px"
            },
            width: {
              xs: "100%",
              md: "unset"
            },
            mb: {
              xs: 3,
              md: 8
            }
          }}
        >
          Launch
        </Button>
        <Box component="img" src={HeroAppPreview} sx={{
        }} />
      </Container>
    </Box>
  );
};

export { Hero };
