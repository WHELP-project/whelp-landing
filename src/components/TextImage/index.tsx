import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Divider from "../../assets/Divider.svg";
import TextImageBg1 from "../../images/TextImageBg1.png";
import TextImageBg2 from "../../images/TextImageBg2.png";

const ButtonStyle = {
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.10)",
  background: "rgba(255, 255, 255, 0.02)",
  color: "#FFF",
  padding: "12px 24px",
  width: {
    xs: "100%",
    md: "unset"
  }
};

const TextImage = () => {
  return (
    <Box sx={{
      mb: {
        xs: 12,
        md: 24
      }
    }}>
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" mb={3}>
                Swap tokens fast and easy
              </Typography>
              <Typography variant="body1" mb={3}>
                Lorem ipsum dolor sit amet consectetur. Cursus egestas sit purus
                id risus enim eu porttitor. Enim morbi orci sit turpis. Nulla
                pulvinar suspendisse nibh commodo posuere fermentum sed. Vitae
                mi massa erat consequat cursus.
              </Typography>
              <Button sx={ButtonStyle}>Learn More</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={TextImageBg1} />
            </Grid>
          </Grid>
          
          <Box mb={3} mt={2} sx={{
            maxWidth: "100%",
            overflowX: "hidden"
          }}>
            <Divider />
          </Box>

          <Grid container spacing={3} className="reverseGrid">
            <Grid item xs={12} md={6}>
              <Box component="img" src={TextImageBg1} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" mb={3}>
                Swap tokens fast and easy
              </Typography>
              <Typography variant="body1" mb={3}>
                Lorem ipsum dolor sit amet consectetur. Cursus egestas sit purus
                id risus enim eu porttitor. Enim morbi orci sit turpis. Nulla
                pulvinar suspendisse nibh commodo posuere fermentum sed. Vitae
                mi massa erat consequat cursus.
              </Typography>
              <Button sx={ButtonStyle}>Learn More</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export { TextImage };
