import React from 'react'
import RecipeCard from '../component/RecipeCard'
import './css/CategoryContainer.css'

const CategoryContainer = (props) => {
    const recipes = props.category

    const renderRecipeCard = () => {
        return recipes.recipes.map(recipe => <RecipeCard key = {recipe.id} recipe = {recipe} />)
    }
    return (
        <div className="category-container">
            <h3>{props.category.categoryName}</h3>
        <div className="card-container">
            
            {renderRecipeCard()}
        </div>
        </div>
    )
}

export default CategoryContainer;