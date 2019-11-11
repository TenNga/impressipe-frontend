import React from 'react';
import './css/RecipeDetail.css';

const RecipeDetail = (props) => {
    return(
        props.recipe ? 
            <div className="single-recipe-detail-container">
                <h1>{props.recipe.name}</h1>
                <div className="step">
                    <h3>Step One</h3>
                    <img src={props.recipe.image_url} alt="stepOne" />
                    <p>Combine 450g wholemeal bread flour, 150g wholemeal spelt flour, 1x 7g sachet fast-action dried yeast and 1 tsp salt in a large mixing bowl. Add 1 tbsp clear honey and 430ml tepid water, and mix with a wooden spoon until no dry flour remains. Cover loosely and leave to one side for 10 minutes. </p>
                </div>
            </div>
        :
            <h1>Loading...</h1>
    )
}
export default RecipeDetail;

