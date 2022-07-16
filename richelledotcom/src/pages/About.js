import React from 'react'
import { Container, Card } from "react-bootstrap";

export default function About() {
    return (
      <div>
        <Container class="d-sm-flex justify-content-center overflow-auto ">
           
          <Card className="p-4 m-2" style={{ width: "30em", border:"solid yellow 3px" }}>
            <Card.Title className="text-center ">
              <h4> Design</h4>
            </Card.Title>
            <Card.Text className="mt-4 text-center">
              I love to create design which speaks, Keep it clean, minimal and
              simple.
            </Card.Text>
            <Card.Title className="text-center mt-4">
              <h4>Tools</h4>
            </Card.Title>
            <Card.Text className="text-center">
             Figma, Canva
            </Card.Text>
            
          </Card>

          <Card className="p-4 m-2" style={{ width: "30rem", border:"solid yellow 3px" }}>
            <Card.Title className="text-center ">
              <h4> Front-End Developer</h4>
            </Card.Title>
            <Card.Text className="mt-4 text-center">
              I love to create design which speaks, Keep it clean, minimal and
              simple.
            </Card.Text>
            <Card.Title className="text-center mt-4 ">
              <h4> Skills</h4>
            </Card.Title>
            <Card.Text className="text-center">
             Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
            </Card.Text>
            
           
          </Card>
        </Container>
      </div>
    );
}
