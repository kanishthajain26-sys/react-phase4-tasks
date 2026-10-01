import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="page not-found">

      <h1>
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <button
        onClick={() => navigate("/")}
      >
        ← Go Home
      </button>

    </section>
  );
}

export default NotFound;