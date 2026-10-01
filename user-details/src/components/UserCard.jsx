import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">

      <div className="user-avatar">
        {user.displayName.charAt(0)}
      </div>

      <div className="user-info">

        <h3>
          {user.displayName}
        </h3>

        <p>
          📧 {user.email}
        </p>

        <p>
          📱 {user.phone}
        </p>

        <Link
          to={`/users/${user.id}`}
          className="details-btn"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
}

export default UserCard;