import Row from "react-bootstrap/Row";
import { useState } from "react";

export default function BetterGreeting(props) {
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section>
      <h1>This is a better greeting</h1>
      <Row lable="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>

      <Row lable="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
    </section>
  );
}
