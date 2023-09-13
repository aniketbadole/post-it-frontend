import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import UserProfile from "./components/User/UserProfile";

console.log("in Auth routes");

const AuthenticatedRoutes = ({ userId }) => {
  console.log(userId);
  return (
    <Routes>
      <Route
        path="/home"
        render={(props) => <Home {...props} userId={userId} />}
      />
      <Route path="/user/:username" Component={UserProfile} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

AuthenticatedRoutes.propTypes = {
  userId: PropTypes.string,
};

export default AuthenticatedRoutes;
