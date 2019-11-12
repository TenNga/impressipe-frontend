import React from 'react';
import './css/RecipeDetail.css';
import ReactTooltip from 'react-tooltip'

const RecipeDetail = (props) => {
    const getStepText = (num) => {
        const step = props.recipe.steps.find(step => step.number === num)
           return step? step.text : ""
    }

    const getAttributes = () => {
        const arr = []
        if(props.recipe.veg) arr.push("V")
        if(props.recipe.vegan) arr.push("V+")
        if(props.recipe.dairy_free) arr.push("DF")
        if(props.recipe.gluten_free) arr.push("GF")
        if(props.recipe.keto) arr.push("K")
        if(props.recipe.healthy) arr.push("H")
        return arr
    }

    return(
        props.recipe ? 
            <div className="single-recipe-detail-container">
                <h1>{props.recipe.name}</h1>
                <div className="step">
                    <p className="recipe-attributes">
                    <span>{"Serves: "+props.recipe.serves + " | Time to Cook: " + props.recipe.time_in_minute + " minutes"}</span>
                    {getAttributes().length? <span data-tip data-for='categories'>{getAttributes().join(" | ")}</span> : null}
                    <ReactTooltip id='categories' type='success' effect='solid'>
                        <span>Vegetarian | Vegan | Dairy Free | Gluten Free</span>
                    </ReactTooltip>
                    </p>
                    <h3>Step {props.stepNum}</h3>
                    <div className="img-desc">
                       <img src={props.recipe.image_url} alt={props.stepNum} />
                        <p className="step-text">{getStepText(props.stepNum)}</p> 
                    </div>
                </div>
            </div>
        :
            <h1>Loading...</h1>
    )
}
export default RecipeDetail;

