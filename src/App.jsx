import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "E-Commerce Shopping Application",
      description:
        "A full-stack e-commerce application where users can browse products, manage their cart and interact with a responsive shopping interface.",
      technologies: ["React", "JavaScript", "Node.js", "Express", "MySQL"],
      github: "https://github.com/skVijayasri/Ecommerce-Shopping-Cart.git",
      demo: "http://ecommerce-shopping-cart-mu.vercel.app",
    },

    {
      title: "Social Media Application",
      description:
        "A full-stack social media platform where users can create posts, interact with other users, like and comment on posts, and manage their profiles.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/skVijayasri/Social-Media-App.git",
      demo: "https://social-media-app-delta-virid.vercel.app/",
    },

    {
      title: "Job Portal Application",
      description:
        "A job portal application connecting recruiters and job seekers with job posting, searching, application management and role-based access.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/skVijayasri/Career-Hub.git",
      demo: "https://careerhub-frontend-three.vercel.app/",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Database",
      items: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <span>&lt;</span>VIJAYASRI S <span>/&gt;</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="hello">
              Hello, I'm
            </p>

            <h1>
              VIJAYASRI S
            </h1>

            <h2>
              Full Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              I build responsive, scalable and user-friendly web
              applications using modern technologies such as React,
              Node.js, Express.js and MongoDB.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn primary">
                View My Projects
              </a>

             
          </div>
          </div>

          

            

          

          <div className="hero-card">

            <div className="code-window">

              <div className="window-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">

                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  name: <span className="green">"VIJAYASRI"</span>,
                </p>

                <p className="indent">
                  role: <span className="green">"Full Stack Developer"</span>,
                </p>

                <p className="indent">
                  skills: [
                </p>

                <p className="indent2">
                  <span className="green">"React"</span>,
                </p>

                <p className="indent2">
                  <span className="green">"Node.js"</span>,
                </p>

                <p className="indent2">
                  <span className="green">"MongoDB"</span>,
                </p>
                <p className="indent2">
                  <span className="green">"Express.js"</span>
                </p>

                <p className="indent">
                  ]
                </p>

                <p>{"};"}</p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="container">

          <div className="section-title">
            <span>01.</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">

            <div className="about-text">

              <p>
                I am a Computer Science Engineering student passionate
                about Full Stack Web Development and building real-world
                applications.
              </p>

              <p>
                I enjoy developing responsive user interfaces, designing
                REST APIs, working with databases and solving technical
                problems using modern web technologies.
              </p>

              <p>
                My goal is to continuously improve my technical skills
                and contribute to meaningful software projects as a
                Full Stack Developer.
              </p>

            </div>

            <div className="about-info">

              <div className="info-card">
                <strong>Education</strong>
                <p>B.E. Computer Science & Engineering</p>
              </div>

              <div className="info-card">
                <strong>Focus</strong>
                <p>Full Stack / MERN Development</p>
              </div>

              <div className="info-card">
                <strong>Location</strong>
                <p>Chidambaram</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <div className="container">

          <div className="section-title">
            <span>02.</span>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-card" key={skill.category}>

                <h3>{skill.category}</h3>

                <div className="skill-list">

                  {skill.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="container">

          <div className="section-title">
            <span>03.</span>
            <h2>Featured Projects</h2>
          </div>

          <p className="section-subtitle">
            Here are some of the projects I have built while developing
            my full-stack development skills.
          </p>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <article className="project-card" key={project.title}>

                <div className="project-top">

                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Demo"
                    >
                      Demo ↗
                    </a>

                  </div>

                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="technologies">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* EDUCATION */}
      <section className="section education-section">

        <div className="container">

          <div className="section-title">
            <span>04.</span>
            <h2>Education</h2>
          </div>

          <div className="education-card">

            <div>

              <h3>
                Bachelor of Engineering – Computer Science and Engineering
              </h3>

              <p>
                Idhaya Engineering College for Women
              </p>

              <p>
                Anna University
              </p>

            </div>

            <div className="education-year">
               2023-2027
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
<section id="contact" className="section contact-section">
  <div className="container contact-container">

    <div className="section-title center">
      <span>05.</span>
      <h2>Let's Connect</h2>
    </div>

    <p className="contact-text">
      I'm currently looking for opportunities where I can
      contribute, learn and grow as a Full Stack Developer.
      Feel free to reach out to me.
    </p>

    <div className="contact-details">

      <div className="contact-item">
        <strong>Email: </strong>
        <a href="mailto:vijayasrikanniya120@gmail.com">
          vijayasrikanniya120@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <strong>GitHub: </strong>
        <a
          href="https://github.com/skVijayasri"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/skVijayasri
        </a>
      </div>

      <div className="contact-item">
        <strong>LinkedIn: </strong>
        <a
          href="https://www.linkedin.com/in/vijayasrishanmugam121/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/vijayasrishanmugam121/
        </a>
      </div>

    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer>

        <p>
          © {new Date().getFullYear()} Vijayasri. Built with React.
        </p>

      </footer>

    </div>
  );
}

export default App;