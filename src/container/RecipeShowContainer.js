import React, {Component} from 'react';
import IngAndEqContainer from './IngAndEqContainer'
import RecipeDetail from '../component/RecipeDetail'
import StepList from '../component/StepList'
import './css/RecipeShowContainer.css'


class RecipeShowContainer extends Component{
    state = {
        selectedRecipe: this.props.recipe? this.props.recipe : ""
    }

    render(){
        return(
            <div className="recipe-detail-container">
                <IngAndEqContainer />
                <RecipeDetail recipe={this.state.selectedRecipe}/>
                <StepList steps={this.state.selectedRecipe.steps}/>
            </div>
        )
    }
}
export default RecipeShowContainer;