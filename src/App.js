import React,{Component} from 'react';
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


class App extends Component{

  URL="http://localhost:3000/api/v1/recipes"

  state = {
    recipes: [],
    selectedRecipe: {}
  }
  
  componentDidMount(){
    fetch(this.URL)
    .then(resp => resp.json())
    .then((recipes)=> this.setState({recipes: recipes}))
  }
        

  render(){
    console.log("Recipes in State: ",this.state.recipes)
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>

          <Route path="/recipes">
            <MainContainer recipes= {this.state.recipes} />
 
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
  }//render
}

export default App;
