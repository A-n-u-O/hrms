import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Resend from "./components/Resend";
import NoMatch from "./components/NoMatch";
import ResetPasswordPage from "./components/ResetPasswordPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for the LoginPage */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword/>} />
          <Route path="/Resend" element={<Resend/>} />
          <Route path="/ResetPasswordPage" element={<ResetPasswordPage/>}/>

          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
