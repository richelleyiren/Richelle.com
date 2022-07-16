import React from 'react'
import { Container, Card } from "react-bootstrap";

export default function Inform() {
    return (
      <div>
        <Container className="d-flex justify-content-center mb-5 text-light">
          <Card className=" w-75" style={{ backgroundColor: "black" }}>
            <Card.Title className="m-2">
              <h2 className="px-5 text-left" style={{ color:'yellow'}}> Hey, I am Richelle</h2>
            </Card.Title>
            <Card.Text className="px-sm-5 py-sm-1">
              <p style={{ lineHeight:"2em"}}>
                I'm a front-end developer located in Ghana. I love to create
                simple yet beautiful websites with great user experience. I'm
                interested in the whole frontend stack Like trying new things
                and building great projects. I'm an independent freelancer and
                blogger. I love to write blogs and read books. I believe
                everything is an Art when you put your consciousness in it. You
                can connect with me via social links.
              </p>
            </Card.Text>
          </Card>
        </Container>
      </div>
    );
}

    //   <Container
    //     fluid
    //     className="p-5 "
    //     style={{ color: "white", border: "white solid 2px" }}
    //   >
    //     <p className="text-10">
    //       I'm a front-end developer located in India. I love to create simple
    //       yet beautiful websites with great user experience. I'm interested in
    //       the whole frontend stack Like trying new things and building great
    //       projects. I'm an independent freelancer and blogger. I love to write
    //       blogs and read books. I believe everything is an Art when you put your
    //       consciousness in it. You can connect with me via social links.
    //     </p>
    //   </Container>;