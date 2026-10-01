import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className="dashboard-layout">

    

      <aside className="sidebar">

        <div className="brand">
          kanishtha.
        </div>

        <p className="menu-title">
          MAIN MENU
        </p>

        <nav>

          <Link to="/dashboard">
            <span>▣</span>
            Overview
          </Link>

          <Link to="/dashboard/profile">
            <span>◉</span>
            Profile
          </Link>

          <Link to="/dashboard/settings">
            <span>⚙</span>
            Settings
          </Link>

        </nav>

        <div className="sidebar-bottom">

          <p>
            Dashboard
          </p>

          <span>
            React Phase 4
          </span>

        </div>

      </aside>


    

      <main className="main-content">

        <header className="topbar">

          <div>
            <p className="topbar-small">
              WORKSPACE
            </p>

            <h3>
              My Dashboard
            </h3>
          </div>

          <div className="user-info">

            <div className="notification">
              🔔
            </div>

            <div className="avatar">
              K
            </div>

            <div>
              <strong>
                Kanishtha
              </strong>

              <small>
                Student
              </small>
            </div>

          </div>

        </header>

        <section className="content-area">

          <Outlet />

        </section>

      </main>

    </div>
  );
}

export default Sidebar;