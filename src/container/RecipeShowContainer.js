import React, {Component} from 'react';
import IngAndEqContainer from './IngAndEqContainer'
import RecipeDetail from '../component/RecipeDetail'
import StepList from '../component/StepList'
import './css/RecipeShowContainer.css'


class RecipeShowContainer extends Component{
    state = {
        selectedRecipe: this.props.recipe? this.props.recipe : "",
        stepNum: "",
        currentStepIng: []
    }

    handleSelectedStep = (stepNum) => {
        this.setState({stepNum})
    }

    getStepIngredient = (stepNum) => {
        if(this.state.selectedRecipe){
            const currentStep = this.state.selectedRecipe.steps.find(step => step.number === stepNum)
            return currentStep? currentStep.ingredients : ""
        }
    }

    render(){
        // console.log("Step Number: ", this.state.stepNum)
        return(
            <div className="recipe-detail-container">
                <IngAndEqContainer currentStepIngredient = {this.getStepIngredient(this.state.stepNum)} AllIngredients = {this.state.selectedRecipe.ingredients} equipments ={this.state.selectedRecipe.equipment}/>
                <RecipeDetail stepNum = {this.state.stepNum} recipe={this.state.selectedRecipe}/>
                <StepList handleSelectedStep={this.handleSelectedStep} steps={this.state.selectedRecipe.steps}/>
            </div>
        )
    }
}
export default RecipeShowContainer;