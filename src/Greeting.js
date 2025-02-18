import React from "react";
import Row from "react-bootstrap/Row";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mary",
      surname: "Poppins",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  render() {
    return (
      <section>
        <h1>This is the Greeting component</h1>
        <Row label="Name">
          <input value={this.state.name} onChange={this.handleNameChange} />
        </Row>

        <Row label="Surname">
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
      </section>
    );
  }
}
