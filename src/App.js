import React, {Component, useState} from 'react';
import User from "./components/User"
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import Test from "./components/Test"

import "./App.css"
import CreditCards from './components/CreditCards';

class App extends Component {
  

  render(){
    return (
    <div className="container">
      {/* <Test test="deneme"/> */}
      <Navbar title="User App"/> 
      <hr/>
      <AddUser/>
      <Users />
      {/* <CreditCards/> */}

    </div>
  );
  }
}

export default App;
