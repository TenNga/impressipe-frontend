import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import NavBar from './container/NavBar'
import MainContainer from './container/MainContainer'
import FourOhFour from './container/FourOhFour';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>

          <Route path="/recipes">
            <MainContainer />
 
          </Route>

          <Route exact path="/">
            <Redirect to="/recipes"/>
 
          </Route>

          <Route >
            <FourOhFour />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
