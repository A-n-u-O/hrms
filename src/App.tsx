import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPasswordStart from "./components/ResetPasswordStart";
import ResendMail from "./components/ResendMail";
import NoMatch from "./components/NoMatch";
import ResetPasswordEnd from "./components/ResetPasswordEnd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for the LoginPage */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPasswordStart" element={<ResetPasswordStart/>} />
          <Route path="/ResendMail" element={<ResendMail/>} />
          <Route path="/ResetPasswordEnd" element={<ResetPasswordEnd/>}/>

          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
