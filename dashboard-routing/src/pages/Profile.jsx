function Profile() {
  return (
    <div>

      <div className="page-heading">

        <p className="heading-label">
          ACCOUNT
        </p>

        <h1>
          My Profile
        </h1>

        <p>
          Manage your personal information.
        </p>

      </div>


      <div className="profile-card">

        <div className="profile-avatar">
          K
        </div>

        <div className="profile-info">

          <h2>
            Kanishtha Jain
          </h2>

          <p>
            React Developer
          </p>

          <div className="profile-details">

            <div>
              <span>Name</span>
              <strong>Kanishtha Jain</strong>
            </div>

            <div>
              <span>Course</span>
              <strong>Web Development</strong>
            </div>

            <div>
              <span>Learning</span>
              <strong>React</strong>
            </div>

            <div>
              <span>Phase</span>
              <strong>Phase 4</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;