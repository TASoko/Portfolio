import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import "./style.css";

function Projects () {
    return (
      <div>
        <CardColumns>
          <Card>
            <Card.Img
              variant="top"
              src="http://askavy.com/demo/img/img-card.jpg"
            />
            <Card.Body>
              <Card.Title>Card title </Card.Title>
              <Card.Text>
                Card Text This card has supporting text below as a natural
                lead-in to additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 10 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="http://askavy.com/demo/img/img-card.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Card Text his card has supporting text below as a natural
                lead-in to additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 10 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="http://askavy.com/demo/img/img-card.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Card Text his card has supporting text below as a natural
                lead-in to additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 11 mins ago</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      </div>
    );
}

export default Projects;