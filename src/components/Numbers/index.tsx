import { Box, Container, Typography } from "@mui/material";

const BoxStyle = {
  padding: "24px",
  width: {
    xs: "100%",
    md: "30%",
  },
};

const Divider = () => (
  <Box
    sx={{
      width: { 
        xs: "100%", 
        md: "1px" 
      },
      minHeight: {
        xs: "1px",
        md: "100%"
      },
      background: "rgba(255, 255, 255, 0.10)",
    }}
  />
);

const Numbers = () => {
  return (
    <Box
      sx={{
        mb: {
          xs: 10,
          md: 18,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
        }}
      >
        <Typography variant="h3" textAlign="center" mb={5}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box sx={BoxStyle}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                lineHeight: "16px",
                textAlign: "center",
                mb: 3,
              }}
            >
              Total Value Locked
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                lineHeight: "48px",
                textAlign: "center",
              }}
            >
              1.20M $
            </Typography>
          </Box>
          <Divider />
          <Box sx={BoxStyle}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                lineHeight: "16px",
                textAlign: "center",
                mb: 3,
              }}
            >
              Total Value Locked
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                lineHeight: "48px",
                textAlign: "center",
              }}
            >
              1.20M $
            </Typography>
          </Box>
          <Divider />
          <Box sx={BoxStyle}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                lineHeight: "16px",
                textAlign: "center",
                mb: 3,
              }}
            >
              Total Value Locked
            </Typography>
            <Typography
              sx={{
                fontSize: "40px",
                lineHeight: "48px",
                textAlign: "center",
              }}
            >
              1.20M $
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export { Numbers };
