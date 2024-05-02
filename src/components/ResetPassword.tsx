import { Box, Container, CssBaseline, Typography } from "@mui/material";
import "../Styles/resetPassword.css";
import mail from "../assets/images/Svg/mail.svg";
import tick from "../assets/images/Svg/tick.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ backgroundColor: "#0050C8" }}>
        <Container
          component={"main"}
          sx={{ padding: "20px", height: "100vh", width: "100vh" }}>
          <CssBaseline />
          <Box
            sx={{
              margin: "auto",
              marginTop: "8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "400px",
            }}>
            <Typography variant="h3" color={"#FFFFFF"}>
              HrPay
            </Typography>
            <Typography
              component={"p"}
              color={"#B3CDFF"}
              textAlign={"center"}
              fontSize={"16px"}
              fontWeight={"400"}
              lineHeight={"24px"}>
              This is dummy text that will be replaced later by proper content.
              The replacement text shouldn’t be more than three lines
            </Typography>
          </Box>
          <Box
            padding={"10px"}
            borderRadius={"0px, 0px, 4px, 4px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 3,
              margin: "auto",
              maxWidth: "400px",
              marginTop: "10px",
              backgroundColor: "#FFFFFF",
            }}>
            <div>
              <img src={mail} alt="mail icon" />
              <img src={tick} alt="tick icon" />
            </div>
            <Typography
              textAlign={"center"}
              fontWeight={"500"}
              fontSize={"30px"}>
              Reset Email Sent
            </Typography>
            <Typography textAlign={"center"} fontSize={"14px"}>
              To complete password reset, please click on the reset password
              button in the email we sent to{" "}
              <span style={{ color: "#0050C8", fontWeight: "800" }}>
                {" "}
                example@email.com
              </span>
            </Typography>
            <Typography fontSize={"12px"} textAlign={"center"} color={"grey"}>
              Didn’t receive the password reset email?{" "}
              <Link
                to={"/Resend"}
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#0050C8",
                  textDecoration: "none",
                  cursor: "pointer",
                }}>
                Resend
              </Link>{" "}
            </Typography>
            <Link
              to={"/"}
              style={{
                fontSize: "14px",
                color: "#0050C8",
                textDecoration: "none",
                cursor: "pointer",
              }}>
              Back to SignIn Page
            </Link>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default ResetPassword;
