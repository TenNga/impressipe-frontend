import React from 'react'
import RecipeCard from '../component/RecipeCard'
import './CategoryContainer.css'

const CategoryContainer = () => {
    const recipes = [1,2,3,4,5,6,7,8]

    const renderRecipeCard = () => {
        return recipes.map(r => <RecipeCard />)
    }
    return (
        <div className="category-container">
            <h3>Healthy Recipe</h3>
        <div className="card-container">
            
            {renderRecipeCard()}
        </div>
        </div>
    )
}

export default CategoryContainer;