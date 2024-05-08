import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const ResetPasswordEnd = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleValidatePassword = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setIsButtonDisabled(true)
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      setIsButtonDisabled(true)
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      setIsButtonDisabled(true)
    } else if (!/\d/.test(password)) {
      setError("Password must contain at least one digit");
      setIsButtonDisabled(true)
    } else if (!/[@#$%^&*!]/.test(password)) {
      setError(
        "Password must contain at least one special character (@#$%^&*!)"
      );
      setIsButtonDisabled(true)
    } else {
      setError(null);
      setIsButtonDisabled(false)
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleValidatePassword();
    // You can add further logic here for form submission if needed
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/')
  };

  return (
    <AuthLayout>
      <div>
        <Container
          component={"main"}
          sx={{
            backgroundColor: "#0050C8",
            padding: "20px",
            height: "100vh",
            width: "100vh",
          }}>
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
            onSubmit={handleSubmit}>
            <Typography
              component={"p"}
              borderBottom={"2px solid gray"}
              color={"#393A4A"}
              padding={"10px"}>
              Reset password
            </Typography>
            <Grid container spacing={2} color={"#393A4A"}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="outlined-basic password"
                  label={"Password"}
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!error}
                  helperText={error}
                  sx={{ borderRadius: "0px, 0px, 0px, 8px" }}
                />
              </Grid>
              <Grid item xs={12} textAlign={"center"}>
                <span
                  style={{
                    color: /[A-Z]/.test(password) ? "blue" : "grey",
                    fontSize: "15px",
                    margin: "8px",
                    padding: "8px",
                  }}>
                  <TaskAltIcon /> Uppercase
                </span>
                <span
                  style={{
                    color: /[a-z]/.test(password) ? "blue" : "grey",
                    fontSize: "15px",
                    margin: "8px",
                    padding: "8px",
                  }}>
                  <TaskAltIcon /> Lowercase
                </span>
                <span
                  style={{
                    color: /\d/.test(password) ? "blue" : "grey",
                    fontSize: "15px",
                    margin: "8px",
                    padding: "8px",
                  }}>
                  <TaskAltIcon /> At least one number
                </span>
                <span
                  style={{
                    color: password.length >= 8 ? "blue" : "grey",
                    fontSize: "15px",
                    margin: "8px",
                    padding: "8px",
                  }}>
                  <TaskAltIcon /> 8 or more characters
                </span>
                <span
                  style={{
                    color: /[@#$%^&*!]/.test(password) ? "blue" : "grey",
                    fontSize: "15px",
                    margin: "8px",
                    padding: "8px",
                  }}>
                  <TaskAltIcon /> Special character
                </span>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  sx={{
                    background: "#0050C8",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "blue" },
                  }}
                  onClick={handleClickOpen}
                  disabled= {isButtonDisabled}>
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Dialog
            open={open}
            TransitionComponent={Slide}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle>Password reset successful!</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Your password has been reset successfully, you can now sign in
                to your account
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Back to Sign In</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordEnd;
