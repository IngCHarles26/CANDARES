import Auth from "./Auth";
import Confirm from "./Confirm";
import Header from "./Header";
import Login from "./Login";
import Message from "./Message";
import Register from "./Register";
import ResetPass from "./ResetPass";

export const AuthComponents = {
  auth: <Auth />,
  login: <Login />,
  register: <Register />,
  password: <ResetPass />,
  message: <Message />,
  confirm: <Confirm />,
  header: <Header />
}