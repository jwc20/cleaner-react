import React from "react";
import Row from "react-bootstrap/Row";

export default function Greeting(props) {
  return (
    <section>
      <h1>This is the Greeting component</h1>
      <Row label="Name">{props.name}</Row>
    </section>
  );
}
