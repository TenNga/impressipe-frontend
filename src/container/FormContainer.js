import React from 'react'
import './css/FormContainer.css'
import StarRatingComponent from 'react-star-rating-component'

class FormContainer extends React.Component {

    state={
        text: "",
        rating: 0,
        imageUrlField: "",
        imageUrl: "",
        author:"",
        scene: 1
    }

    handleClick = () => {
        this.props.closeModal()
    }

    handleChildClick = (event) => {
        event.stopPropagation()
    }
    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleStarInput = (nextValue) => {
        this.setState({rating: nextValue});
      }

    handleImageSubmit = (event) => {
        event.preventDefault();
        if(!this.state.imageUrl){
            this.setState({
                imageUrl: this.state.imageUrlField
        })
        }else{
            this.setState({
                imageUrl: "",
                imageUrlField: ""
            })
        }
    }

    textScene = () => {
        return (
        <div className="form-box">
            <form className="form">
                <h2>How Was It?</h2>
                <StarRatingComponent value={this.state.rating} name="rating" onStarClick={this.handleStarInput}/>
                <textarea value={this.state.text} onChange={this.handleInput} id="form-text" name="text"/>
                <h2 id="author-header">What's Your Name?</h2>
                <input name="author" value={this.state.author} onChange={this.handleInput}/>
            </form>
            <div className="form-button-container">
                <button className="form-button" onClick={this.modalSubmit}>Post</button>
                <button className="form-button" onClick={this.decrementScene}>Previous</button>
            </div>
        </div>
        )
    }

    imageScene = () => {
        return(
            <div className="form-box">
                <h2>Show Us Your Take</h2>
                <form onSubmit={this.handleImageSubmit}>
                    <input onChange={this.handleInput} value={this.state.imageUrlField} id="form-image" name="imageUrlField"/>
                    <input type="submit" value={this.state.imageUrl? "Remove" : "Upload"}/>
                </form>
                <div className="form-image-box">
                    {this.state.imageUrl? <img src={this.state.imageUrl} alt="user-upload" className="comment-image"/>:null}
                </div>
                <div className="form-button-container">
                    <button className="form-button" onClick={this.incrementScene}>{this.state.imageUrl?"Next":"Skip"}</button>
                </div>
            </div>
        )
    }


    scenes = [this.imageScene, this.textScene]

    renderScene = () => {
        return this.scenes[this.state.scene-1]()
    }

    incrementScene = () => {
        this.setState(prevProps =>{return{
            scene: prevProps.scene + 1
        }})
    }

    decrementScene = () => {
        this.setState(prevProps =>{return{
            scene: prevProps.scene - 1
        }})
    }

    render(){
        console.log(this.props.img)
        return(
            <div onClick={this.handleClick} className="form-container">
                <div onClick={this.handleChildClick} className="form-div">
                {this.renderScene() }
                </div>
            </div>
        )
    }
}

export default FormContainer