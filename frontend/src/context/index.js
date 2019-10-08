import React, { Component, createContext } from 'react';
import AUTH_SERVICE from '../services/auth';
//import axios from 'axios'
export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: null,
    studentId: undefined
  };

  componentDidMount(){
    this.checkUser()
  }

  logUser = (loggedUser) => {
    this.setState({ loggedUser });
  };

  // checkUser = async () => {
  //   const response = await axios.get('http://localhost:3000/api/user')
  //   console.log('current user: ', response);
    
  //   this.setState({
  //     loggedUser: response
  //   })
  // }

  checkUser = () => {
    AUTH_SERVICE.checkUser()
    .then((response) => {
      console.log(response);
      this.setState({
        loggedUser: response
      })
    })
    .catch((err) => console.log(err));
  }

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
