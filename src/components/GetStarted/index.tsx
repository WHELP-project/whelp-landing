import { Box, Container, Grid, Typography } from "@mui/material";
import GetStartedBg from "../../assets/GetStartedBg.svg";
import GetStartedBgMobile from "../../assets/GetStartedBgMobile.svg";

const BoxStyle = {
  borderLeft: "1px solid rgba(255, 255, 255, 0.10)",
  p: 3,
  position: "relative",
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
    <Box sx={{
      mb: {
        xs: 8,
        md: 18
      }
    }}>
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
            Get started with Whelp Ecosystem
          </Typography>
          <Typography variant="body1" textAlign="center">
            Lorem ipsum dolor sit amet consectetur. Cursus egestas sit purus id
            risus enim eu porttitor. Enim morbi orci sit turpis.
          </Typography>
        </Box>
        <Box sx={{ 
          display: "flex", 
          flexDirection: {
            xs: "column",
            md: "row"
          },
          justifyContent: "space-between", 
          gap: 3,
        }}>
          <Grid item xs={12} md={4} sx={BoxStyle}>
            <Typography variant="body2">Privacy</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Cursus egestas sit purus
              id risus enim eu porttitor. Enim morbi orci sit turpis.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={BoxStyle}>
            <Typography variant="body2">Privacy</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Cursus egestas sit purus
              id risus enim eu porttitor. Enim morbi orci sit turpis.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={BoxStyle}>
            <Typography variant="body2">Privacy</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur. Cursus egestas sit purus
              id risus enim eu porttitor. Enim morbi orci sit turpis.
            </Typography>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export { GetStarted };
