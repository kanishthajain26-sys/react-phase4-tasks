import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const indianNames = [
    "Kanishtha Jain",
    "Anshika Sahu",
    "Neha Sahu",
    "Priya Sharma",
    "Rahul Verma",
    "Aman Gupta",
    "Sneha Patel",
    "Riya Singh",
    "Arjun Mehta",
    "Pooja Sharma",
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();

        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <section className="page loading-page">
        <div className="loader"></div>

        <h2>Loading User...</h2>

        <p>Please wait...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page empty-state">
        <h2>User Not Found 😕</h2>

        <p>{error}</p>

        <button onClick={() => navigate("/")}>
          ← Back to Users
        </button>
      </section>
    );
  }

  const displayName = indianNames[Number(id) - 1];

  return (
    <section className="page">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Users
      </button>

      <div className="user-details">

        <div className="user-profile">

          <div className="large-avatar">
            {displayName.charAt(0)}
          </div>

          <h1>
            {displayName}
          </h1>

          <p className="username">
            @{user.username}
          </p>

        </div>

        <div className="details-content">

          {/* CONTACT */}

          <div className="detail-section">

            <h2>
              Contact Information
            </h2>

            <div className="detail-grid">

              <div className="detail-box">
                <span>
                  Email
                </span>

                <strong>
                  {user.email}
                </strong>
              </div>

              <div className="detail-box">
                <span>
                  Phone
                </span>

                <strong>
                  {user.phone}
                </strong>
              </div>

              <div className="detail-box">
                <span>
                  Website
                </span>

                <strong>
                  {user.website}
                </strong>
              </div>

            </div>

          </div>

          {/* ADDRESS */}

          <div className="detail-section">

            <h2>
              Address
            </h2>

            <div className="address-box">

              <p>
                <strong>
                  Street:
                </strong>{" "}
                {user.address.street}
              </p>

              <p>
                <strong>
                  Suite:
                </strong>{" "}
                {user.address.suite}
              </p>

              <p>
                <strong>
                  City:
                </strong>{" "}
                {user.address.city}
              </p>

              <p>
                <strong>
                  Zipcode:
                </strong>{" "}
                {user.address.zipcode}
              </p>

            </div>

          </div>

          {/* COMPANY */}

          <div className="detail-section">

            <h2>
              Company
            </h2>

            <div className="company-box">

              <h3>
                {user.company.name}
              </h3>

              <p>
                {user.company.catchPhrase}
              </p>

              <span>
                {user.company.bs}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default UserDetails;