import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const auth = localStorage.getItem("token");
  return auth ? children : <Navigate to="/login" />;
};

export default RouteGuard;
