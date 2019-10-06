import React, { Component, createContext } from 'react';
import AUTH_SERVICE from '../services/auth';

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: null,
    studentId: undefined
  };

  logUser = (loggedUser) => {
    this.setState({ loggedUser });
  };

  logOut = () => {
    AUTH_SERVICE.logOut()
      .then((response) => {
        console.log(response);
        this.setState({ loggedUser: null });
      })
      .catch((err) => console.log(err));
  };

  setStudentId = (studentId) => {
    this.setState({ studentId })
  }

  render() {
    const { state, logUser, logOut, setStudentId } = this;
    return (
      <MyContext.Provider value={{ state, logUser, logOut, setStudentId }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
