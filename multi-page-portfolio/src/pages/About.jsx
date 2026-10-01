function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  const learning = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive and interactive websites using React, JavaScript, HTML and CSS.",
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Learning Node.js, Express, REST APIs and MongoDB to understand full-stack development.",
    },
    {
      number: "03",
      title: "Real Projects",
      description:
        "Practicing concepts by building useful projects instead of only learning theory.",
    },
  ];

  return (
    <section className="page">

      {/* Heading */}
      <div className="page-heading">
        <p>Get to know me</p>

        <h1>About Me</h1>

        <span>
          My learning journey, skills and goals.
        </span>
      </div>

      {/* About Section */}
      <div className="about-grid">

        <div className="about-text">
          <h2>Who I Am</h2>

          <p>
            I am a web development student who enjoys
            creating websites and learning new technologies.
          </p>

          <p>
            My current focus is React, JavaScript,
            backend development and building real-world
            projects.
          </p>

          <h2>My Goal</h2>

          <p>
            My goal is to become a skilled developer and
            work in a good technology company where I can
            continue learning and solve real-world problems.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-box">
          <h2>My Skills</h2>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Learning Journey */}
      <div className="learning-section">
        <h2>My Learning Journey</h2>

        <div className="learning-grid">
          {learning.map((item) => (
            <div
              className="learning-card"
              key={item.number}
            >
              <span className="learning-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="education">
        <h2>Education</h2>

        <div className="education-card">
          <h3>NavGurukul</h3>
          <p>Web Development</p>
        </div>

        <div className="education-card">
          <h3>B.Sc</h3>
          <p>
            Government Motilal Vigyan Mahavidyalaya
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;