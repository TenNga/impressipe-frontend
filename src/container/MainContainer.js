import React, { Component } from 'react';
import CarouselContainer from "./CarouselContainer"
import MainRecipeContainer from './MainRecipeContainer';

const MainComtainer = () => {
    return(
        <div className="main-container" >
            <CarouselContainer />
            <MainRecipeContainer />
        </div>
    )
}
export default MainComtainer;