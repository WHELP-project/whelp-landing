import { Box, Container, Grid, Link, Typography } from "@mui/material";
import GetStartedBg from "../../assets/GetStartedBg.svg";
import { Fade } from "react-awesome-reveal";
import GetStartedBgMobile from "../../assets/GetStartedBgMobile.svg";

const BoxStyle = {
  borderLeft: "1px solid rgba(255, 255, 255, 0.10)",
  p: 3,
  position: "relative",
  flex: 1,
  "&:before": {
    content: '""',
    position: "absolute",
    left: "-1px",
    top: "calc(50% - 6px)",
    width: "1px",
    backgroundColor: "#FFF",
    height: "12px",
  },
};

const GetStarted = () => {
  return (
    <Box
      sx={{
        mb: {
          xs: 8,
          md: 18,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box mb={5}>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "center",
              width: "100%",
            }}
          >
            <GetStartedBgMobile />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              width: "100%",
            }}
          >
            <GetStartedBg />
          </Box>
          <Typography variant="h2" mb={3} textAlign="center">
            Start your journey with the Whelp Ecosystem
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Grid item xs={12} md={4} sx={BoxStyle}>
            <Fade triggerOnce={true}>
              <Typography variant="body2">Install a wallet</Typography>
              <Typography variant="body1">
                Whelp currently supports <Link target="_blank" href="https://wallet.cosmostation.io/cosmos">Cosmostation</Link>, <Link target="_blank" href="https://www.keplr.app/">Keplr</Link>, and <Link target="_blank" href="https://www.leapwallet.io/">Leap</Link> wallets.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} sx={BoxStyle}>
            <Fade triggerOnce={true} delay={500}>
              <Typography variant="body2">Fund your wallet</Typography>
              <Typography variant="body1">
                Fund your wallet with COREUM, WHELP, or another supported token.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4} sx={BoxStyle}>
            <Fade triggerOnce={true} delay={1000}>
              <Typography variant="body2">Begin your journey</Typography>
              <Typography variant="body1">
                Connect your wallet to the Whelp DeFi Hub!
              </Typography>
            </Fade>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export { GetStarted };
