import React, { Fragment } from 'react';
import './css/RecipeDetail.css';
import ReactTooltip from 'react-tooltip'
import FormContainer from '../container/FormContainer'

class RecipeDetail extends React.Component {

    state={
        formToggle: false
    }

    getStepText = (num) => {
        const step = this.props.recipe.steps.find(step => step.number === num)
           return step? step.text : ""
    }

    getAttributes = () => {
        const { recipe } = this.props
        const arr = []
        if(recipe.veg) arr.push("V")
        if(recipe.vegan) arr.push("V+")
        if(recipe.dairy_free) arr.push("DF")
        if(recipe.gluten_free) arr.push("GF")
        if(recipe.keto) arr.push("K")
        if(recipe.healthy) arr.push("H")
        return arr
    }

    toggleModal = () => {
        this.setState(prevProps => {return {
             formToggle: !prevProps.formToggle 
            }})
    }

    render(){
        const { recipe, stepNum } = this.props
        return(
            recipe ? 
                <Fragment>
                    {this.state.formToggle ? <FormContainer closeModal={this.toggleModal}/>: null}
                    <div className="single-recipe-detail-container">
                        <h1>{recipe.name}</h1>
                        <div className="step">
                            <div className="recipe-attributes">
                                <span>{"Serves: "+ recipe.serves + " | Time to Cook: " + recipe.time_in_minute + " minutes"}</span>
                                {this.getAttributes().length? <span data-tip data-for='categories'>{this.getAttributes().join(" | ")}</span> : null}
                                <ReactTooltip id='categories' type='success' effect='solid'>
                                    <span>Vegetarian | Vegan | Dairy Free | Gluten Free</span>
                                </ReactTooltip>
                            </div>
                            <h3>Step {stepNum}</h3>
                            <img src={recipe.image_url} alt={stepNum} />
                            <div className="text-button">
                                <p className="step-text">{this.getStepText(stepNum)}</p>
                                </div>
                                <button onClick={this.toggleModal}>MODAL</button>
                            
                            
                        </div>
                    </div>
                </Fragment>
            :
                <h1>Loading...</h1>
        )
}}
export default RecipeDetail;

