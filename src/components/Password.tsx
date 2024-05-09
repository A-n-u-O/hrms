import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  error?: string | null;
  setError?: React.Dispatch<React.SetStateAction<string | null>>
};

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Password"
      variant="outlined"
      id="outlined-basic password"
      fullWidth
      required
      placeholder="Password123"
      value={props.password}
      onChange={handlePasswordChange}
      error={!!props.error}
      helperText={props.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ borderRadius: "0px, 0px, 0px, 8px" }}
    />
  );
};
export default PasswordInput;
