import React from 'react';
import IngAndEqContainer from './IngAndEqContainer'
import RecipeDetail from '../component/RecipeDetail'
import StepList from '../component/StepList'
import './css/RecipeShowContainer.css'


const RecipeShowContainer = (props) => {
    return(
        <div className="recipe-detail-container">
            <IngAndEqContainer />
            <RecipeDetail recipe={props.recipe}/>
            <StepList />
        </div>
    )
}
export default RecipeShowContainer;