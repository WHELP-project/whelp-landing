import { Box, Button, Container, Typography } from "@mui/material";

const LaunchApp = () => {
  return (
    <Container maxWidth="lg" sx={{
      mb: 21,
      mt: 12,
      position: "relative"
    }}>
      <Box
        sx={{
          borderRadius: "16px",
          border:
            "1px solid var(--Whelp-stroke-secondary, rgba(255, 255, 255, 0.10))",
          background:
            "#08090D",
          maxWidth: { xs: "300px", md: "936px" },
          padding: {
            xs: "64px 16px",
            md: "64px 96pxb",
          },
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" mb={3} textAlign="center">
          Are you excited for Whelp?
        </Typography>
        <Typography variant="body1" mb={3} textAlign="center">
          Get started in under 3 minutes!
        </Typography>
        <Button
          sx={{
            padding: "12px 24px",
            color: "#0A0C0F",
            margin: "0 auto",
            width: {
              xs: "100%",
              md: "unset"
            }
          }}
        >
          Launch Now!
        </Button>
      </Box>
      <Box sx={{
        marginTop: {
          xs: "-130px",
          md: "-80px"
        },
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: -1,
        borderRadius: "16px",
        border: "1px solid var(--Whelp-stroke-secondary, rgba(255, 255, 255, 0.10))",
        background:
          "linear-gradient(180deg, rgba(68, 202, 131, 0.04) 0%, rgba(10, 12, 15, 0.00) 100%)",
        minHeight: "174px",
        width: "100%",
        maxWidth: {
          xs: "348px",
          md: "1128px"
        },
      }}></Box>
    </Container>
  );
};

export { LaunchApp };
