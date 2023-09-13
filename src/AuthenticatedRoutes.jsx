import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/User/UserProfile";

const AuthenticatedRoutes = () => {
  const token = localStorage.getItem("token");
  const userId = jwtDecode(token).user.id;
  console.log(userId);

  return (
    <Routes>
      <Route path="/home" element={<Home userId={userId} />} />
      <Route path="/user/:username" element={<UserProfile />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

AuthenticatedRoutes.propTypes = {
  userId: PropTypes.string,
};

export default AuthenticatedRoutes;
