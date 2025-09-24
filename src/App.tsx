import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import './App.css';

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return { ref, isInView };
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

// About Section Component
const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="section-content"
    >
      <motion.h1 
        variants={fadeInUp}
        className="section-title"
      >
        About Me
      </motion.h1>
      <motion.div 
        variants={staggerContainer}
        className="about-content"
      >
        <motion.div variants={fadeInLeft} className="about-text">
          <p>
            Hello! I'm a passionate developer with a love for creating innovative solutions 
            and beautiful user experiences. I enjoy working with modern technologies and 
            constantly learning new skills to stay at the forefront of development.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>
        <motion.div variants={fadeInRight} className="about-skills">
          <h3>Skills</h3>
          <motion.div 
            variants={staggerContainer}
            className="skills-grid"
          >
            {['React', 'TypeScript', 'Node.js', 'Python', 'CSS3', 'Git'].map((skill, index) => (
              <motion.span 
                key={skill}
                variants={scaleIn}
                className="skill-tag"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Express", "Socket.io"]
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for data analysis and visualization with customizable charts, filters, and export capabilities.",
      tech: ["D3.js", "Python", "Flask"]
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="section-content"
    >
      <motion.h1 
        variants={fadeInUp}
        className="section-title"
      >
        Projects
      </motion.h1>
      <motion.div 
        variants={staggerContainer}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            variants={scaleIn}
            className="project-card"
          >
            <div className="project-image">
              <div className="project-placeholder">Project {index + 1}</div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      date: "2022 - Present",
      description: "Lead frontend development for multiple web applications, mentor junior developers, and implement modern React patterns and best practices."
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      date: "2020 - 2022",
      description: "Developed end-to-end web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver scalable solutions."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      date: "2018 - 2020",
      description: "Created responsive websites and web applications for various clients, focusing on user experience and performance optimization."
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="section-content"
    >
      <motion.h1 
        variants={fadeInUp}
        className="section-title"
      >
        Work Experience
      </motion.h1>
      <motion.div 
        variants={staggerContainer}
        className="timeline"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.title}
            variants={fadeInLeft}
            className="timeline-item"
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-date">{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <div className="App">
      {/* Left Navigation */}
      <nav className="nav-sidebar">
        <div className="nav-content">
          <div className="nav-header">
            <h2>Portfolio</h2>
          </div>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Element name="about" className="section">
          <AboutSection />
        </Element>

        <Element name="projects" className="section">
          <ProjectsSection />
        </Element>

        <Element name="experience" className="section">
          <ExperienceSection />
        </Element>
      </main>
    </div>
  );
}

export default App;
