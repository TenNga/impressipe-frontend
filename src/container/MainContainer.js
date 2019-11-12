import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom"
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';
import RecipeShowContainer from './RecipeShowContainer';
import FourOhFour from './FourOhFour'

const MainContainer = (props) => {

    const veg = {categoryName: "Vegetarian", recipes: props.recipes.filter(recipe => recipe.veg === true)}
    const vegan = {categoryName: "Vegan", recipes: props.recipes.filter(recipe => recipe.vegan === true) }
    const diary_free = {categoryName: "Dairy Free", recipes: props.recipes.filter(recipe => recipe.dairy_free === true) }
    const gluten_free = {categoryName: "Gluten Free", recipes: props.recipes.filter(recipe => recipe.gluten_free === true) }
    const keto = {categoryName: "Keto", recipes: props.recipes.filter(recipe => recipe.keto === true) }
     
    const twentyMinRecipe = {header: "Ready In 20 Minutes", recipe: props.recipes.find(recipe => parseInt(recipe.time_in_minute) <= 20)};
    const partyTime = {header: "Cooking for a Group?", recipe: props.recipes.find(recipe => parseInt(recipe.serves) >= 12)};
    const ingFiveOnly = {header: "Just 5 Ingredients", recipe: props.recipes.find(recipe => parseInt(recipe.ingredients.length) === 5)};

    const carouselRecipes = [twentyMinRecipe, partyTime, ingFiveOnly]
    const categories = [veg,vegan,diary_free,gluten_free,keto]

    const recipeShowObj = (routerProps) => {
        if(props.recipes.length){
        let recipe = props.recipes.find(recipe=>recipe.id === +(routerProps.match.params.id))
        if(recipe) {
            console.log(recipe)
            return <RecipeShowContainer key={recipe.id} recipe={recipe}/>
        }

        else return <FourOhFour/>
        } else return <h1>Loading...</h1>
    }

    return(
        <Switch>
            <Route path="/recipes/:id" render={recipeShowObj}/>

            <Route exact path="/recipes">
                <div className="main-container" >
                    <CarouselContainer carouselRecipes = {carouselRecipes} />
                    <MainRecipeContainer categories={categories} />
                </div>
            </Route>
        </Switch>
    )
}
export default MainContainer;