import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <section className="page empty-state">
        <div className="not-found-icon">!</div>

        <h1>Project Not Found</h1>

        <p>
          Sorry, the project you are looking for does not exist.
        </p>

        <button onClick={() => navigate("/projects")}>
          ← Back to Projects
        </button>
      </section>
    );
  }

  return (
    <section className="page">
      {/* Back Button */}
      <button
        className="back-btn"
        onClick={() => navigate("/projects")}
      >
        ← Back to Projects
      </button>

      <div className="details-page">

        {/* Header */}
        <div className="details-header">
          <div>
            <span className="project-category">
              {project.category}
            </span>

            <h1>{project.title}</h1>

            <p className="details-description">
              {project.description}
            </p>
          </div>

          <div className="details-number">
            0{project.id}
          </div>
        </div>

        {/* Technologies */}
        <div className="details-section">
          <h2>Technologies Used</h2>

          <div className="skills">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="details-section">
          <h2>Key Features</h2>

          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div className="feature-card" key={feature}>
                <span className="feature-number">
                  0{index + 1}
                </span>

                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="details-actions">
          <button
            onClick={() => navigate("/projects")}
          >
            Explore More Projects →
          </button>

          <button
            className="outline-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;