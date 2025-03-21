import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for SEO
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import careerPaths from "../../Assets/Projects/carer_paths.png";
import videcareerPathsVideo from "../../Assets/videos/career_paths.mp4";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Mahek Chandibhamar - Projects</title>
        <meta name="description" content="A collection of projects created by Mahek Chandibhamar, including web development, career guidance platforms, and more." />
        <meta name="keywords" content="Mahek Chandibhamar, Projects, Web Development, Career Paths, React.js" />
        <meta property="og:title" content="Mahek Chandibhamar - Projects" />
        <meta property="og:description" content="A collection of projects created by Mahek Chandibhamar, including web development, career guidance platforms, and more." />
        <meta property="og:image" content="https://mahekchandibhamar.com/readme-img.png" />
        <meta property="og:url" content="https://mahekchandibhamar.com/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Mahek Chandibhamar - Projects" />
        <meta name="twitter:description" content="A collection of projects created by Mahek Chandibhamar, including web development, career guidance platforms, and more." />
        <meta name="twitter:image" content="https://mahekchandibhamar.com/readme-img.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerPaths}
              isBlog={false}
              title="Career-Paths"
              description="Developed a user-friendly guidance platform to help students choose their educational paths after the 10th and 12th grades. The application includes personalized quizzes, video insights, and tailored recommendations for career fields and colleges, guiding students in making well-informed decisions."
              ghLink="https://github.com/chandibhamarmahek/career_paths"
              demoLink={videcareerPathsVideo}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
