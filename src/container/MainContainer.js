import React, { Fragment } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom"
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';
import RecipeShowContainer from './RecipeShowContainer';
import FourOhFour from './FourOhFour'

const MainContainer = (props) => {

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    const nonVeg = {categoryName: "Non-Vegetarian", recipes: shuffle(props.recipes.filter(recipe => recipe.veg === false))} 
    const veg = {categoryName: "Vegetarian", recipes: shuffle(props.recipes.filter(recipe => recipe.veg === true))}
    const vegan = {categoryName: "Vegan", recipes: shuffle(props.recipes.filter(recipe => recipe.vegan === true)) }
    const diary_free = {categoryName: "Dairy Free", recipes: shuffle(props.recipes.filter(recipe => recipe.dairy_free === true)) }
    const gluten_free = {categoryName: "Gluten Free", recipes: shuffle(props.recipes.filter(recipe => recipe.gluten_free === true))}
    const keto = {categoryName: "Keto", recipes: shuffle(props.recipes.filter(recipe => recipe.keto === true))}
     
    const twentyMinRecipe = {header: "Ready In 20 Minutes", recipes: props.recipes.filter(recipe => parseInt(recipe.time_in_minute) <= 20)};
    const partyTime = {header: "Cooking for a Group?", recipes: props.recipes.filter(recipe => parseInt(recipe.serves) >= 12)};
    const ingFiveOnly = {header: "Just 5 Ingredients", recipes: props.recipes.filter(recipe => parseInt(recipe.ingredients.length) === 5)};

    const carouselRecipes = [twentyMinRecipe, partyTime, ingFiveOnly]
    const categories = [nonVeg, veg,vegan,diary_free,gluten_free,keto]

    const recipeShow = (routerProps) => {
        if(props.recipes.length){
        let recipe = props.recipes.find(recipe=>recipe.id === +(routerProps.match.params.id))
        if(recipe) {
            console.log(recipe)
            return <RecipeShowContainer key={recipe.id} recipe={recipe}/>
        }

        else return <FourOhFour/>
        } else return <h1>Loading...</h1>
    }
    if(props.recipes.length){
    return(
            <Switch>
                <Route path="/recipes/:id" render={recipeShow}/>

                <Route exact path="/recipes">
                    <div className="main-container" >
                        <Fragment>
                            <CarouselContainer carouselRecipes = {carouselRecipes} />
                            <MainRecipeContainer categories={categories} />
                        </Fragment>

                    </div>
                </Route>
            </Switch>

    )} else return(
        <div>
            <h4>Loading...</h4>
            <img src="/loading.gif" alt="Loading..."/>
        </div>                
    )
}
export default MainContainer;