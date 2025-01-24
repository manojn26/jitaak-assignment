import ForgotPasswordEmailInput from "./components/ForgotPasswordEmailInput";
import Login from "./components/Login";
import OtpInput from "./components/OtpInput";
import Register from "./components/Register";
import SetNewPassword from "./components/SetNewPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/forgot-password-email'
            element={<ForgotPasswordEmailInput />}
          />
          <Route path='/otp-verify' element={<OtpInput />} />
          <Route path='/set-new-password' element={<SetNewPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
