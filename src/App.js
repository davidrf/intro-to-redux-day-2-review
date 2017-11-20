import React, { Component } from 'react';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
  }

  onChangeFirstName = ({ target }) => this.setState({ firstName: target.value });

  onChangeLastName = ({ target }) => this.setState({ lastName: target.value });

  render() {
    const { firstName, lastName } = this.state;
    const { onChangeFirstName, onChangeLastName } = this;

    return (
      <div>
        <h1>Full Name is: {firstName} {lastName}</h1>
        <label>First Name</label>
        <input onChange={onChangeFirstName} value={firstName} />
        <label>Last Name</label>
        <input onChange={onChangeLastName} value={lastName} />
      </div>
    );
  }
}

export default App;
