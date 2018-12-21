import React, { Component } from 'react';
//import Calculator from "./components/Calculator";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Login from "./components/LoginScreen/Login";
import Signup from "./components/LoginScreen/Signup";

const PrivateScreen = () => <h2>Privare screen</h2>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/private" component={PrivateScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
