import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import UserProfile from "./components/User/UserProfile";
// import { AuthProvider } from "./AuthContext";
// import PrivateRoute from "./PrivateRoute";

const App = () => (
  //<AuthProvider>
  <Router>
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route path="/home" Component={Home} />
      <Route path="/hello" Component={HelloWorld} />
      <Route path="/user/:username" Component={UserProfile} />
    </Routes>
  </Router>
  //</AuthProvider>
);

export default App;
