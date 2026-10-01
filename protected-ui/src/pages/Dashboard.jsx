import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function handleLogout() {

    localStorage.removeItem("isLoggedIn");

    navigate("/");
  }

  return (
    <div className="dashboard-page">

      <div className="dashboard-box">

        <h1>Welcome to Dashboard</h1>

        <p>
          This is a protected page.
        </p>

        <p>
          You can see this page only after login.
        </p>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;