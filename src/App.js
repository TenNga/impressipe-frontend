import React,{Component} from 'react';
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
import RecipeShowContainer from './container/RecipeShowContainer'
import RecipeView from './container/RecipeView'
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
    .then((recipes)=> this.setState({recipes: recipes.slice(54)}))
  }

  render(){
    console.log("Recipes in State: ",this.state.recipes)
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route path="/recipes/:id">
              <RecipeShowContainer />
            </Route>

            <Route exact path="/">
              <MainContainer recipes={this.state.recipes}/>
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
