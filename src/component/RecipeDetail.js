import React from 'react';
import './css/RecipeDetail.css';

const RecipeDetail = () => {
    return(
        <div className="single-recipe-detail-container">
            <h1>Recipe Details</h1>
            <div className="step">
                <h3>Step One</h3>
                <img src="https://www.thespruceeats.com/thmb/AxzBP0y7b5T3KFHZbEtVvkJis88=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/step-by-step-sugar-cookie-recipe-304892-01-5bbb750bc9e77c0051ca0c8b.jpg" alt="stepOne" />
                <p>Combine 450g wholemeal bread flour, 150g wholemeal spelt flour, 1x 7g sachet fast-action dried yeast and 1 tsp salt in a large mixing bowl. Add 1 tbsp clear honey and 430ml tepid water, and mix with a wooden spoon until no dry flour remains. Cover loosely and leave to one side for 10 minutes. </p>
            </div>
        </div>
    )
}
export default RecipeDetail;