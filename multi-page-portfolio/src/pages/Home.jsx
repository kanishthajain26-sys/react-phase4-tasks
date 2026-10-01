import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-content">

        <p className="small-text">
          Hello, I'm
        </p>

        <h1>Kanishtha Jain</h1>

        <h2>Frontend Developer</h2>

        <p>
          I am a web development student passionate about
          creating useful, responsive and attractive web
          applications using React and JavaScript.
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/projects")}>
            Explore My Projects →
          </button>

          <button
            className="outline-btn"
            onClick={() => navigate("/contact")}
          >
            Let's Connect
          </button>
        </div>

      </div>

      <div className="home-card">

        <div className="profile-circle">
          KJ
        </div>

        <h3>Web Developer</h3>

        <p>
          React • JavaScript • Node.js
        </p>

        <div className="home-status">
          <span></span>
          Currently learning & building
        </div>

      </div>
    </section>
  );
}

export default Home;