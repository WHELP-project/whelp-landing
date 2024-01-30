import { Box, Container, Typography } from "@mui/material";
import Github from "../../assets/Github.svg";
import X from "../../assets/X.svg";
import Telegram from "../../assets/Telegram.svg";

const BoxStyle = {
  padding: "24px",
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid rgba(255, 255, 255, 0.10)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
  borderLeft: "1px solid rgba(255, 255, 255, 0.10)",
  width: {
    xs: "100%",
    md: "50%",
  },
};

const IconBoxStyle = {
  minWidth: "48px",
  height: "48px",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.04)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 2,
};

const Community = () => {
  return (
    <Box
      sx={{
        mb: {
          xs: 3,
          md: 10.5,
        },
      }}
    >
      <Container>
        <Typography variant="h3" textAlign="center" mb={5}>
          Join Our Community
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "1200px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Box sx={BoxStyle}>
            <Box sx={IconBoxStyle}>
              <Github style={{ width: "32px" }} />
            </Box>
            <Box>
              <Typography variant="body2" mb={1}>
                Github
              </Typography>
              <Typography variant="body1">
                Follow our repo on Github and stay on top of latest updates,
                projects and announcements.
              </Typography>
            </Box>
          </Box>
          <Box sx={BoxStyle}>
            <Box sx={IconBoxStyle}>
              <X style={{ width: "32px", position: "absolute" }} />
            </Box>
            <Box>
              <Typography variant="body2" mb={1}>
                X (formerly Twitter)
              </Typography>
              <Typography variant="body1">
                Follow the latest X news about the Web3 Space and our latest
                product updates.
              </Typography>
            </Box>
          </Box>
          <Box sx={BoxStyle}>
            <Box sx={IconBoxStyle}>
              <Telegram style={{ width: "32px" }} />
            </Box>
            <Box>
              <Typography variant="body2" mb={1}>
                Telegram
              </Typography>
              <Typography variant="body1">
                Follow the latest our news about the Web3 Space and our latest
                product updates.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { Community };
