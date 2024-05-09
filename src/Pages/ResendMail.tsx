import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const ResendMail = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div
        style={{
          backgroundColor: "#222",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Container component={"main"} sx={{ padding: "20px", width: "100vh" }}>
          <CssBaseline />
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "600px",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow
            }}>
            <Typography
              sx={{
                backgroundColor: "#333",
                color: "white",
                padding: "14px 2px 14px 25px",
                borderRadius: "4px 4px 0 0",
                width: "100%",
                fontSize: "25px",
                fontWeight: "550",
              }}>
              Logo
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "28px",
                fontWeight: "600",
                padding: "5px",
              }}>
              Reset Password
            </Typography>
            <Typography>
              To complete password reset, please click on the password reset
              button below.
            </Typography>
            <Button
              sx={{
                margin: "15px",
                background: "#0050C8",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "blue" },
                fontWeight: "400px",
              }}
              onClick={() => {
                navigate("/ResetPasswordEnd");
              }}>
              Reset Password
            </Button>
            <Typography sx={{ color: "grey", padding: "10px" }}>
              This is an automatically generated email. Please do not reply
            </Typography>
          </Box>
        </Container>
      </div>
    </AuthLayout>
  );
};

export default ResendMail;
