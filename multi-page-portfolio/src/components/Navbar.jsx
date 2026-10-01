import {NavLink} from "react-router-dom";

function Navbar () {
    return (

        <nav className="navbar">
            <h2 className="logo">kanishtha.</h2>

            <div className="nav-links">
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/about">About</NavLink>
                <NavLink to ="/projects">Projects</NavLink>
                <NavLink to ="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;