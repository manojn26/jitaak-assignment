import ForgotPasswordEmailInput from "./components/ForgotPasswordEmailInput";
import Login from "./components/Login";
import OtpInput from "./components/OtpInput";
import Register from "./components/Register";
import SetNewPassword from "./components/SetNewPassword";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

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
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
