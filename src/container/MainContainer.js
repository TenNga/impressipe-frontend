import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom"
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';
import RecipeShowContainer from './RecipeShowContainer'

const MainContainer = (props) => {

    const veg = {categoryName: "Vegetarian", recipes: props.recipes.filter(recipe => recipe.veg === true)}
    const vegan = {categoryName: "Vegan", recipes: props.recipes.filter(recipe => recipe.vegan === true) }
    const diary_free = {categoryName: "Dairy Free", recipes: props.recipes.filter(recipe => recipe.dairy_free === true) }
    const gluten_free = {categoryName: "Gluten Free", recipes: props.recipes.filter(recipe => recipe.gluten_free === true) }
    const keto = {categoryName: "Keto", recipes: props.recipes.filter(recipe => recipe.keto === true) }
     
    const categories = [veg,vegan,diary_free,gluten_free,keto]
    console.log(categories)

    const recipeShowObj = (routerProps) => {
        let recipe = props.recipes.find(recipe=>recipe.id === +(routerProps.match.params.id))
        console.log('Recipe Show Obj:')
        console.log("recipe: ", recipe)
        console.log("routerProps: ", routerProps)
        return <RecipeShowContainer recipe={recipe}/>
    }

    return(
        <Switch>
            <Route path="/recipes/:id" render={recipeShowObj}>
                
            </Route>

            <Route exact path="/recipes">
                <div className="main-container" >
                    <CarouselContainer />
                    <MainRecipeContainer categories={categories} />
                </div>
            </Route>
        </Switch>
    )
}
export default MainContainer;