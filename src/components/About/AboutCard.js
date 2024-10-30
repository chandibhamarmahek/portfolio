import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahek Chandibhamar </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently pursuing B-Tech CSE at Charusat University.
            <br />
            I have completed Diploma in CE at CUSP surendranagar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardenning
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with purpose, inspire with impact!"{" "}
          </p>
          <footer className="blockquote-footer">Mahek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
