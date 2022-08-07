import Row from "react-bootstrap/Row";

export default function BetterGreeting(props) {
  return (
    <section>
      <h1>This is a better greeting</h1>
      <Row lable="Name">{props.name}</Row>
    </section>
  );
}
