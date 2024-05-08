import React from "react";
import classes from "../Styles/loginPage.module.css";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={classes.bg}>{children}</div>
    </>
  );
};
export default AuthLayout;
