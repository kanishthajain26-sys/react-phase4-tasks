import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
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
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        const updatedUsers = data.map((user, index) => ({
          ...user,
          displayName: indianNames[index],
        }));

        setUsers(updatedUsers);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section className="page loading-page">
        <div className="loader"></div>

        <h2>Loading Users...</h2>

        <p>Please wait while users are loading.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page empty-state">
        <h2>Something went wrong 😕</h2>

        <p>{error}</p>

        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </section>
    );
  }

  return (
    <section className="page">

      <div className="page-heading">
        <p>Explore our users</p>

        <h1>Users</h1>

        <span>
          Click on a user to see complete details.
        </span>
      </div>

      <div className="user-count">
        <strong>{users.length}</strong> Users Available
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>

    </section>
  );
}

export default Home;