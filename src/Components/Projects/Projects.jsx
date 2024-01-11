import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LMS from "../../Assets/LMS.jpg"
import TERMINAL from "../../Assets/Terminal.png";
import ADVIT from "../../Assets/Advit.png";
import NavBar from "../Navbar";
import Footer from "../Footer";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <NavBar /> */}
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            {/* TODO YASH */}
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="LMS"
              description="A user-friendly Online Bookstore project in which users can log in or register, view the available books, select books along with their quantity, and buy them. Users can also get payment receipts after successful payment. The project can also be used by the administrator, who can add new books, remove books, increase and decrease the quantity of books, change the price of the books as well as maintain the selling history of books."
              ghLink="https://github.com/yashbhoskar/LMS"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TERMINAL}
              isBlog={false}
              title="Terminal Portfolio"
              description="Crafted a unique terminal-themed portfolio website using React JS, showcasing my skills and projects. Explore my coding journey in a retro-inspired terminal interface. Check out my work and experience the world of web development in a terminal-inspired aesthetic"
              ghLink="https://github.com/yashbhoskar/yb.Terminal"
              demoLink="https://yashbhoskar.github.io/yb.Terminal/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ADVIT}
              isBlog={false}
              title="User-wise Data Analysis and Visualization"
              description="Focused Data Analysis: Concentrated on analyzing user-specific data, emphasizing performance and productivity metrics. Implemented Tracking Systems: Established data collection using flask API and analysis processes to track individual user performance. Actionable Insights Generation: Aimed to provide clear insights to sup-port informed decision-making based on the data collected and visualized."
              // ghLink=""
              // demoLink=""              
            />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </Container>
  );
}

export default Projects;
