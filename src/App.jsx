import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import jwtDecode from "jwt-decode";

const App = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = token ? true : false;
  const userId = isAuthenticated ? jwtDecode(token).user.id : null;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={Login} />
        <Route path="/register" element={Register} />
        {isAuthenticated ? (
          <Route path="/" element={<AuthenticatedRoutes userId={userId} />} />
        ) : (
          <Route path="/" element={LandingPage} />
        )}
        {isAuthenticated ? (
          <Route path="/*" element={<Navigate replace to="/home" />} />
        ) : (
          <Route path="/*" element={<Navigate replace to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
