import React from 'react';
import './css/RecipeDetail.css';

const RecipeDetail = (props) => {
    const getStepText = (num) => {
        const step = props.recipe.steps.find(step => step.number === num)
           return step? step.text : ""
    }
    return(
        props.recipe ? 
            <div className="single-recipe-detail-container">
                <h1>{props.recipe.name}</h1>
                <div className="step">
                    <h3>Step {props.stepNum}</h3>
                    <img src={props.recipe.image_url} alt="stepOne" />
                    <p>{getStepText(props.stepNum)}</p>
                </div>
            </div>
        :
            <h1>Loading...</h1>
    )
}
export default RecipeDetail;

