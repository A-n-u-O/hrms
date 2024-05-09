import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPasswordStart from "./Pages/ResetPasswordStart";
import ResendMail from "./Pages/ResendMail";
import NoMatch from "./Pages/NoMatch";
import ResetPasswordEnd from "./Pages/ResetPasswordEnd";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for the LoginPage */}
          <Route path="/" element={<LoginPage />} />

          {/* Nested routes for Forgot Password flow */}
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="ResetPasswordStart" element={<ResetPasswordStart />} />
          <Route path="/ResendMail" element={<ResendMail />} />
          <Route path="/ResetPasswordEnd" element={<ResetPasswordEnd />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
