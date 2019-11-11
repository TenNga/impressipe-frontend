import React, {Component} from 'react';
import IngAndEqContainer from './IngAndEqContainer'
import RecipeDetail from '../component/RecipeDetail'
import StepList from '../component/StepList'
import './css/RecipeShowContainer.css'


class RecipeShowContainer extends Component{
    state = {
        selectedRecipe: this.props.recipe? this.props.recipe : "",
        stepNum: 1
    }

    handleSelectedStep = (stepNum) => {
        this.setState({stepNum})
    }

    render(){
        // console.log("Step Number: ", this.state.stepNum)
        return(
            <div className="recipe-detail-container">
                <IngAndEqContainer ingredients = {this.state.selectedRecipe.ingredients} equipments ={this.state.selectedRecipe.equipment}/>
                <RecipeDetail stepNum = {this.state.stepNum} recipe={this.state.selectedRecipe}/>
                <StepList handleSelectedStep={this.handleSelectedStep} steps={this.state.selectedRecipe.steps}/>
            </div>
        )
    }
}
export default RecipeShowContainer;