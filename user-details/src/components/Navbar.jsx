import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        User Details
      </h2>

      <div className="nav-links">
        <NavLink to="/">
          Users
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;