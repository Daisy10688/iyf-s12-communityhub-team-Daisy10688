import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/shell.css";

export default function Layout() {
  return (
    <div className="shell">
      <a href="#main" className="shell-skip">Skip to content</a>
      <Navbar />
      <main id="main" className="shell-main">
        <Outlet />
      </main>
      <footer className="shell-footer">
        MamaCare, a community for expectant and new mothers.
      </footer>
    </div>
  );
}
