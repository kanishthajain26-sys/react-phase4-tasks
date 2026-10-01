function Settings() {
  return (
    <div>

      <div className="page-heading">

        <p className="heading-label">
          PREFERENCES
        </p>

        <h1>
          Settings
        </h1>

        <p>
          Manage your dashboard preferences.
        </p>

      </div>


      <div className="settings-card">

        <div className="setting-row">

          <div>
            <h3>
              Email Notifications
            </h3>

            <p>
              Receive updates about your projects.
            </p>
          </div>

          <div className="toggle active">
            <div></div>
          </div>

        </div>


        <div className="setting-row">

          <div>
            <h3>
              Dark Mode
            </h3>

            <p>
              Change the appearance of your dashboard.
            </p>
          </div>

          <div className="toggle">
            <div></div>
          </div>

        </div>


        <div className="setting-row">

          <div>
            <h3>
              Weekly Progress
            </h3>

            <p>
              Get a weekly summary of your learning.
            </p>
          </div>

          <div className="toggle active">
            <div></div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;