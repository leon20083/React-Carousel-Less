import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-3">
            <Card className="m-3" border="info" text="primary">
              <Card.Img
                variant="top"
                src="https://kronosexperience.com/wp-content/uploads/2021/10/Nombre-de-participants-team-building.jpeg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt tenetur at animi
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card className="m-3" border="info" text="primary">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt tenetur at animi
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="top"
                src="https://www.kingstowncollege.ie/wp-content/uploads/2022/03/team-development-plan.jpeg"
              ></Card.Img>
            </Card>
            <Card className="m-3" border="info" text="primary">
              <Card.Img
                variant="top"
                src="https://img.championat.com/news/big/u/j/kak-sobiralas-team-spirit-chempion-the-international-2021_16345777011855493255.jpg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat incidunt tenetur at animi
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        ;
      </>
    );
  }
}
