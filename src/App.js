import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import NavBar from './container/NavBar'
import MainContainer from './container/MainContainer'
import RecipeView from './container/RecipeView'
import FourOhFour from './container/FourOhFour';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/recipes/:id">
            <RecipeView />
          </Route>

          <Route exact path="/">
            <MainContainer />
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
