import React, { Fragment } from 'react';
import './css/RecipeDetail.css';
import ReactTooltip from 'react-tooltip'
import Comment from '../component/Comment'
import FormContainer from '../container/FormContainer'

class RecipeDetail extends React.Component {

    state={
        formToggle: false,
        image_url: "",
        newComment: null
    }

    setNewComment = (comment) => {
        this.setState({
            newComment: comment
        })
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

    toggleModal = (event, url) => {
        this.setState(prevProps => {return {
             formToggle: !prevProps.formToggle,
             image_url: url
            }})
    }

    renderComment = () => {
        return this.props.recipe.comments.map(comment => <Comment toggleModal={this.toggleModal} key={comment.id} comment={comment}/>)
    }

    render(){
        console.log(this.state.newComment)
        const { recipe, stepNum } = this.props
        return(
            recipe ? 
                <Fragment>
                    {this.state.formToggle ? <FormContainer setNewComment={this.setNewComment} recipeId={this.props.recipe.id} img={this.state.image_url} closeModal={this.toggleModal}/>: null}
                    <div className="single-recipe-detail-container">
                        <h1>{recipe.name}</h1>
                        <div className="step">
                            <div className="top-step">
                                <div className="recipe-attributes">
                                <span>{"Serves: "+ recipe.serves + " | Time to Cook: " + recipe.time_in_minute + " minutes"}</span>
                                {this.getAttributes().length? <span data-tip data-for='categories'>{this.getAttributes().join(" | ")}</span> : null}
                                <ReactTooltip id='categories' type='success' effect='solid'>
                                    <span>Vegetarian | Vegan | Dairy Free | Gluten Free</span>
                                </ReactTooltip>
                            </div>

                            <h3>Step {stepNum}</h3>

                            <img src={recipe.image_url} alt={stepNum} />
                            </div>
                            
                            <div className="text-button">
                                <p className="step-text">{this.getStepText(stepNum)}</p>
                            </div>
                            <div id="comments-headers">
                                <h4>Comments</h4>
                                <button id="comment-btn" onClick={this.toggleModal}>+</button>
                            </div>
                            <div className="comment-container">
                                {this.state.newComment? <Comment toggleModal={this.toggleModal} comment={this.state.newComment}/>:null}
                                {this.renderComment()}
                            </div>
                        </div>
                    </div>
                </Fragment>
            :
                <h1>Loading...</h1>
        )
}}
export default RecipeDetail;

