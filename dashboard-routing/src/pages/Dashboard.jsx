function Dashboard() {
  return (
    <div>

      <div className="page-heading">

        <div>
          <p className="heading-label">
            OVERVIEW
          </p>

          <h1>
            Welcome back, Kanishtha 👋
          </h1>

          <p>
            Here is what's happening with your work today.
          </p>
        </div>

      </div>


      <div className="stats">

        <div className="stat-card">

          <div className="stat-icon purple">
            ◈
          </div>

          <div>
            <p>
              Projects
            </p>

            <h2>
              12
            </h2>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon blue">
            ✓
          </div>

          <div>
            <p>
              Completed
            </p>

            <h2>
              08
            </h2>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon orange">
            ◷
          </div>

          <div>
            <p>
              In Progress
            </p>

            <h2>
              04
            </h2>
          </div>

        </div>

      </div>


   

      <div className="dashboard-grid">

        <div className="activity-card">

          <div className="card-header">

            <div>
              <h2>
                Recent Activity
              </h2>

              <p>
                Your latest work
              </p>
            </div>

          </div>


          <div className="activity">

            <div className="activity-icon">
              ✓
            </div>

            <div>
              <strong>
                React Project completed
              </strong>

              <p>
                Phase 4 mini project
              </p>
            </div>

            <span>
              Today
            </span>

          </div>


          <div className="activity">

            <div className="activity-icon">
              ◈
            </div>

            <div>
              <strong>
                Dashboard Routing
              </strong>

              <p>
                Nested routes created
              </p>
            </div>

            <span>
              Today
            </span>

          </div>


          <div className="activity">

            <div className="activity-icon">
              +
            </div>

            <div>
              <strong>
                Profile page added
              </strong>

              <p>
                New page created
              </p>
            </div>

            <span>
              Yesterday
            </span>

          </div>

        </div>


       

        <div className="progress-card">

          <h2>
            Learning Progress
          </h2>

          <p>
            React Phase 4
          </p>

          <div className="progress-bar">

            <div className="progress">
            </div>

          </div>

          <div className="progress-info">

            <strong>
              80%
            </strong>

            <span>
              Almost there!
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;