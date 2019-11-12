import React from 'react'
import './css/RecipeCard.css'
import ReactTooltip from 'react-tooltip'

const RecipeCard = (props) => {
    return(
        <div className="recipe-card">
            <div className="image">
                <img src={props.recipe.image_url? props.recipe.image_url : "/impressipeReal.png"} />
            </div>
            <div className="title">
                <h3 data-tip data-for="card-title">{props.recipe.name.length > 37? props.recipe.name.slice(0,37) + "...": props.recipe.name}</h3>
                <ReactTooltip id='card-title' aria-haspopup='true' role='example'>
                <h3>{ props.recipe.name}</h3>
                </ReactTooltip>
            </div>
        </div>
    )
}
export default RecipeCard