import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import LanguageStack from "./LanguageStack";
import Toolstack from "./Toolstack";
import DatabaseStack from "./DatabaseStack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Programming <strong className="purple">Languages </strong>
        </h1>
        <LanguageStack />

        <h1 className="project-heading">
          Devops <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          Data<strong className="purple">base</strong>
        </h1>
        <DatabaseStack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
