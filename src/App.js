import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
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
    return (
      <Router>
        <div className="lock">
            <img src="https://image.flaticon.com/icons/svg/35/35432.svg" alt="roate" />
          </div>
        <div className="App">
          
          <NavBar recipes={this.state.recipes}/>

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
