import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom"
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';
import RecipeShowContainer from './RecipeShowContainer'

const MainContainer = () => {
    return(
        <Switch>
            <Route path="/recipes/:id">
                <RecipeShowContainer />
            </Route>

            <Route exact path="/recipes">
                <div className="main-container" >
                    <CarouselContainer />
                    <MainRecipeContainer />
                </div>
            </Route>
        </Switch>
    )
}
export default MainContainer;