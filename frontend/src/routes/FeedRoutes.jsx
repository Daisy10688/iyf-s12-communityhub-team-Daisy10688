
import { Route } from "react-router-dom";

import Feed from "../pages/Feed";
import ProtectedRoute from "../components/ProtectedRoute";

export const feedRoutes = [
  <Route key="protected-feed" element={<ProtectedRoute />}>
    <Route path="/feed" element={<Feed />} />
  </Route>,
];
