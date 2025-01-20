import ForgotPasswordEmailInput from "./components/ForgotPasswordEmailInput";
import Login from "./components/Login";
import Register from "./components/Register";
import SetNewPassword from "./components/SetNewPassword";

function App() {
  return (
    <>
      <Register />
      <Login />
      <ForgotPasswordEmailInput />
      <SetNewPassword />
    </>
  );
}

export default App;
