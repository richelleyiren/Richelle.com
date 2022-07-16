import React from 'react'
import {Button,Container, Navbar,Nav, NavDropdown} from "react-bootstrap"
import "./App.css"
import About from "./pages/About"
import Inform from "./pages/Inform";

export default function App() {
  return (
    <div style={{ backgroundColor:" black", letterSpacing:'3px'}}>
      <Container className="py-5"  >
          <Navbar expand="lg" >
              <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{backgroundColor:'white'}}  />
              <Navbar.Collapse  className="justify-content-center" id="basic-navbar-nav" style={{  color:'white'}}>
                <Nav defaultActiveKey="/home" as="ul" >
                    <Nav.Item as="li">
                      <Nav.Link style={{  color:'white'}} href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link style={{  color:'white'}} eventKey="link-1">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link style={{  color:'white'}} eventKey="link-2"> What I Do</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link style={{  color:'white'}} eventKey="link-2">Projects</Nav.Link>
                    </Nav.Item>
              </Nav>
              </Navbar.Collapse>
            
    </Navbar>
      </Container>
      


       <Inform/>
        <About/>
       
   

    </div>
  )
}

