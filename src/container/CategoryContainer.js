import React from 'react'
import RecipeCard from '../component/RecipeCard'
import './css/CategoryContainer.css'
import { Link } from 'react-router-dom'

const CategoryContainer = (props) => {
    const recipes = props.category

    const renderRecipeCard = () => {
        return recipes.recipes.map(recipe => <Link to={"/recipes/" + recipe.id} key={recipe.name}><RecipeCard key = {recipe.id} recipe = {recipe} /></Link>)
    }
    return (
        <div className="category-container">
            <h3 className="category-header">{props.category.categoryName}</h3>
        <div className="card-container">
            
            {renderRecipeCard()}
        </div>
        </div>
    )
}

export default CategoryContainer;