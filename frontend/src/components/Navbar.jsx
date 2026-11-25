import { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth(); // from Daisy's AuthContext
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    "shell-link" + (isActive ? " shell-link--active" : "");

  return (
    <header className="shell-header">
      <nav className="shell-nav" aria-label="Main">
        <Link to="/" className="shell-brand">MamaCare</Link>

        <button
          type="button"
          className="shell-toggle"
          aria-expanded={open}
          aria-controls="shell-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul id="shell-menu" className={"shell-menu" + (open ? " shell-menu--open" : "")}>
          {user ? (
            <>
              <li><NavLink to="/feed" className={linkClass}>Community</NavLink></li>
              <li><NavLink to="/profile" className={linkClass}>My profile</NavLink></li>
              <li>
                <button type="button" className="shell-link shell-logout" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="/login" className={linkClass}>Log in</NavLink></li>
              <li><NavLink to="/register" className={linkClass}>Create account</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
