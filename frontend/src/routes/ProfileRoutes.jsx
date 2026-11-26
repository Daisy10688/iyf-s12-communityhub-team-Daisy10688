
import { Route } from "react-router-dom";

import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

export const profileRoutes = [
  <Route key="protected-profile" element={<ProtectedRoute />}>
    <Route path="/profile" element={<Profile />} />
  </Route>,
];
