import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMysql } from "react-icons/si";
import {
  DiMongodb,
} from "react-icons/di";


function DatabaseStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default DatabaseStack;