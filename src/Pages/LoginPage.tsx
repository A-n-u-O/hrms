import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../Context/Auth";
import PasswordInput from "../components/Password";
import Email from "../components/Email";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  const auth = useAuth;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, password: any) => {
    e.preventDefault();
    //submission logic here
    if (email.trim() !== "" || password.trim() !== "") {
      navigate("/Dashboard");
    } else {
      alert("Please fill in both email and password fields.");
    }
  };

  return (
    <>
      <AuthLayout>
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
            component={"form"}
            padding={"10px"}
            borderRadius={"0px, 0px, 4px, 4px"}
            sx={{
              mt: 3,
              margin: "auto",
              maxWidth: "400px",
              marginTop: "10px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow
            }}
            onSubmit={(e) => handleSubmit(e, password)}>
            <Typography
              component={"p"}
              borderBottom={"2px solid gray"}
              color={"#393A4A"}>
              sign in with email
            </Typography>
            <Grid container spacing={2} color={"#393A4A"}>
              <Grid item xs={12} marginTop={"12px"}>
                <Email setEmail= {setEmail} email= {email}/>
              </Grid>
              <Grid item xs={12} marginTop={"12px"}>
                <PasswordInput setPassword={setPassword} password={password} />
              </Grid>
              <Grid item xs={12}>
                <Link
                  to={"/ForgotPassword"}
                  style={{
                    fontSize: "14px",
                    color: "#0050C8",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}>
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  sx={{
                    background: "#0050C8",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "blue" },
                    fontWeight: "400px",
                    $hover: "none",
                    cursor: "pointer",
                  }}>
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography color={"grey"}>
                  By signing in, you are agreeing to our{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#0050C8",
                      pointerEvents: "none",
                    }}>
                    Terms & Conditions and Privacy Policy
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
