import React, { Component } from 'react';
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';

const MainContainer = () => {
    return(
        <div className="main-container" >
            <CarouselContainer />
            <MainRecipeContainer />
        </div>
    )
}
export default MainContainer;