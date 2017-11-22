import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFirstName, changeLastName } from './rootReducer'

class App extends Component {
  onChangeFirstName = ({ target }) => this.props.changeFirstName(target.value);

  onChangeLastName = ({ target }) => this.props.changeLastName(target.value);

  render() {
    const { firstName, lastName } = this.props;
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

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
});

// const mapDispatchToProps = dispatch => ({
  // changeFirstName: value => dispatch(changeFirstName(value)),
  // changeLastName: value => dispatch(changeLastName(value)),
// });

const mapDispatchToProps = ({
  changeFirstName,
  changeLastName,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
