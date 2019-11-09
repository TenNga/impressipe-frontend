import React from 'react';
import IngAndEqContainer from './IngAndEqContainer'
import RecipeDetail from '../component/RecipeDetail'
import StepList from '../component/StepList'
import './css/RecipeShowContainer.css'


const RecipeShowContainer = () => {
    return(
        <div className="recipe-detail-container">
            <IngAndEqContainer />
            <RecipeDetail />
            <StepList />
        </div>
    )
}
export default RecipeShowContainer;