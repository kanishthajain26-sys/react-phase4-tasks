import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-top">
        <span className="project-category">
          {project.category}
        </span>

        <span className="project-number">
          0{project.id}
        </span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="technology-list">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-features">
        {project.features.slice(0, 2).map((feature) => (
          <span key={feature}>
            ✓ {feature}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${project.id}`}
        className="details-btn"
      >
        View Project
        <span>→</span>
      </Link>
    </div>
  );
}

export default ProjectCard;