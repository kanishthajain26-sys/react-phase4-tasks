import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <div className="home-content">

        <p className="home-label">
          REACT PHASE 4
        </p>

        <h1>
          Welcome to
          <br />
          My Dashboard
        </h1>

        <p className="home-description">
          A simple dashboard application built with
          React and React Router.
        </p>

        <Link
          to="/dashboard"
          className="dashboard-button"
        >
          Open Dashboard →
        </Link>

      </div>

      <div className="home-card">

        <div className="card-icon">
          ◈
        </div>

        <h2>
          Dashboard Routing
        </h2>

        <p>
          Explore the dashboard, profile and settings
          pages using nested routes.
        </p>

      </div>

    </div>
  );
}

export default Home;