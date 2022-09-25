import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <section id="skills">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading" style={{textAlign:"center", color:"white"}}>
            Professional Skillset
          </h1>

          <Techstack />

          <h1 className="project-heading" style={{textAlign:"center", color:"white"}}>
            Tools I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </section>
  );
}

export default Skills;