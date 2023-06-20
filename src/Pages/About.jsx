import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col, TabContainer } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-5">
                <Tab.Pane eventKey="first">
                  <img
                    alt="xxx"
                    src="https://s3-alpha.figma.com/hub/file/2016158567/78f39c70-a1d2-4b26-a368-1cf7f43a9538-cover.png"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis debitis voluptatibus facilis dolor molestiae atque
                    praesentium ducimus, quis, quia omnis numquam quisquam
                    mollitia eveniet veniam.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    alt="xxx"
                    src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis debitis voluptatibus facilis dolor molestiae atque
                    praesentium ducimus, quis, quia omnis numquam quisquam
                    mollitia eveniet veniam.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    alt="xxx"
                    src="https://s3-alpha.figma.com/hub/file/1066609153/f972f018-5e41-44fe-bd67-2c9743717f50-cover.png"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis debitis voluptatibus facilis dolor molestiae atque
                    praesentium ducimus, quis, quia omnis numquam quisquam
                    mollitia eveniet veniam.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    alt="xxx"
                    src="https://s3-alpha.figma.com/hub/file/551983830/e21bd90f-1aa3-4e56-ac8a-30a0a5b09770-cover.png"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis debitis voluptatibus facilis dolor molestiae atque
                    praesentium ducimus, quis, quia omnis numquam quisquam
                    mollitia eveniet veniam.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    alt="xxx"
                    src="https://newpulselabs.b-cdn.net/wp-content/uploads/2022/07/best-figma-ui-kits-web-design-3.jpg"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis debitis voluptatibus facilis dolor molestiae atque
                    praesentium ducimus, quis, quia omnis numquam quisquam
                    mollitia eveniet veniam.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}
