import React from "react";
import "./style.css";
import BlurbCard from "./blurbcard";
import {Card} from "react-bootstrap";

function Blurb () {
    return (
      <div className="blurb">
        <h2>Freelance Full Stack Web Developer</h2>
        <BlurbCard />
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Freelance Full Stack Web Developer</Card.Title>
            <Card.Text>
              Hi my name is Thokozile Soko. I am a certified full stack web
              developer with focus on UI/UX and mobile app development. I’m New
              York City based. I’m currently an analyst at a NYC startup.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Blurb;