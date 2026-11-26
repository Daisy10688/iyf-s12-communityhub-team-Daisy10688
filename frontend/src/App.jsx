
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import { authRoutes } from "./routes/AuthRoutes";
import { feedRoutes } from "./routes/FeedRoutes";
import { profileRoutes } from "./routes/ProfileRoutes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/feed" replace />} />

        {authRoutes}
        {feedRoutes}
        {profileRoutes}

        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
