import React from 'react'
import './css/RecipeCard.css'

const RecipeCard = (props) => {
    return(
        <div className="recipe-card">
            <div className="image">
                <img src={props.recipe.image_url} alt={props.recipe.name}/>
            </div>
            <div className="title">
                <h3>{props.recipe.name}</h3>
            </div>
        </div>
    )
}
export default RecipeCard