import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Product Details</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;