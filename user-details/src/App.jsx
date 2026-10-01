

import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
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

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/users/:id"
            element={<UserDetails />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;