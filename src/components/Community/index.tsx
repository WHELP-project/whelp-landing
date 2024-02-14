import { Box, Container, Link, Typography } from "@mui/material";
import Github from "../../assets/Github.svg";
import X from "../../assets/X.svg";
import Discord from "../../assets/Discord.svg";

import Links from "../../links";

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
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    borderColor:
      "1px solid var(--Whelp-stroke-secondary, rgba(255, 255, 255, 0.10))",
  },
  transition: "border 500ms ease-out",
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
          <Link sx={BoxStyle} target="_blank" href={Links.X}>
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
          </Link>
          <Link sx={BoxStyle} target="_blank" href={Links.DISCORD}>
            <Box sx={IconBoxStyle}>
              <Discord style={{ width: "32px" }} />
            </Box>
            <Box>
              <Typography variant="body2" mb={1}>
                Discord
              </Typography>
              <Typography variant="body1">
                Join our Discord community to discuss and shape the future of the Whelp ecosytem.
              </Typography>
            </Box>
          </Link>
          <Link sx={BoxStyle} target="_blank" href={Links.GITHUB}>
            <Box sx={IconBoxStyle}>
              <Github style={{ width: "32px" }} />
            </Box>
            <Box>
              <Typography variant="body2" mb={1}>
                GitHub
              </Typography>
              <Typography variant="body1">
                Check out our repo on GitHub to keep track of the latest Whelp developments.
              </Typography>
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export { Community };
