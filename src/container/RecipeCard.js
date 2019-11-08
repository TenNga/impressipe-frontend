import React from 'react'
import './RecipeCard.css'

const RecipeCard = () => {
    return(
        <div className="recipe-card">
            <div className="image">
                <img src="https://cdn.riseofthevegan.com/img3/d7f366b12eab.png" />
            </div>
            <div className="title">
                <h3>Title</h3>
            </div>
        </div>
    )
}
export default RecipeCard