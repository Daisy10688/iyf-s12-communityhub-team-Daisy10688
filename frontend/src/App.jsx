import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { useAuth } from "./context/AuthContext";

import Register from "./pages/Register"; // Daisy
import Login from "./pages/Login";       // Daisy
import Profile from "./pages/Profile";   // Syanda
import Feed from "./pages/Feed";         // Faith

// Replace with Daisy's protected-route component once her branch is merged.
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>That page doesn't exist. Use the menu to get back to the community.</p>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/feed" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
