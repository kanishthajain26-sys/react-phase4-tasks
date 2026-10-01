import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;

  // Search + Category Filter
  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search);

    const matchesCategory =
      category === "All" ||
      project.category === category;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const startIndex =
    (currentPage - 1) * projectsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Search Change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Category Change
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="page projects-page">

      {/* Page Heading */}
      <div className="page-heading">
        <p>What I have built</p>

        <h1>My Projects</h1>

        <span>
          Explore my learning journey and projects.
        </span>
      </div>

      {/* Controls */}
      <div className="project-controls">

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <select
          value={category}
          onChange={handleCategory}
        >
          <option value="All">All Projects</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Project">Project</option>
        </select>

      </div>

      {/* Result Information */}
      <div className="project-result-info">
        <p>
          Showing{" "}
          <strong>{currentProjects.length}</strong>{" "}
          of{" "}
          <strong>{filteredProjects.length}</strong>{" "}
          projects
        </p>
      </div>

      {/* Projects */}
      {currentProjects.length > 0 ? (
        <div className="projects-grid">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔎</div>

          <h2>No Projects Found</h2>

          <p>
            Try searching for another project or
            change the category.
          </p>

          <button
            onClick={() => {
              setSearchTerm("");
              setCategory("All");
              setCurrentPage(1);
            }}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            ← Previous
          </button>

          <div className="page-numbers">
            {Array.from(
              { length: totalPages },
              (_, index) => (
                <button
                  key={index}
                  className={
                    currentPage === index + 1
                      ? "active-page"
                      : ""
                  }
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                >
                  {index + 1}
                </button>
              )
            )}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next →
          </button>

        </div>
      )}

    </section>
  );
}

export default Projects;