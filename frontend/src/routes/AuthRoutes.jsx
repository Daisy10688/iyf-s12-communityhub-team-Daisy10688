
import { Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

export const authRoutes = [
  <Route key="login" path="/login" element={<Login />} />,
  <Route key="register" path="/register" element={<Register />} />,
];
