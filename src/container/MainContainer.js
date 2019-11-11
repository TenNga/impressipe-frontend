import React, { Component } from 'react';
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';

const MainContainer = (props) => {

    const veg = {categoryName: "Vegetarian", recipes: props.recipes.filter(recipe => recipe.veg === true)}
    const vegan = {categoryName: "Vegan", recipes: props.recipes.filter(recipe => recipe.vegan === true) }
    const diary_free = {categoryName: "Dairy Free", recipes: props.recipes.filter(recipe => recipe.dairy_free === true) }
    const gluten_free = {categoryName: "Gluten Free", recipes: props.recipes.filter(recipe => recipe.gluten_free === true) }
    const keto = {categoryName: "Keto", recipes: props.recipes.filter(recipe => recipe.keto === true) }
     
    const categories = [veg,vegan,diary_free,gluten_free,keto]
    console.log(categories)
    return(
        <div className="main-container" >
            <CarouselContainer />
            <MainRecipeContainer categories = {categories} />
        </div>
    )
}
export default MainContainer;