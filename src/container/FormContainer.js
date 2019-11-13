import React from 'react'
import './css/FormContainer.css'

class FormContainer extends React.Component {

    state={
        text: "",
        
        scene: 1
    }

    handleClick = () => {
        this.props.closeModal()
    }

    handleChildClick = (event) => {
        event.stopPropagation()
    }

    // return(
    //     // <div onClick={handleClick} className="form-container">
    //     //     <div onClick={handleChildClick} className="form-div">
    //     //     {props.img? <img src={props.img} /> :
    //     //         <form className="form">
    //     //             <textarea className="form-text" name="text" rows="10" cols="60"/>
    //     //         </form>}
    //     //     </div>
    //     // </div>
    // )
    inputText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    scene1 = () => {
        return (
        <form className="form">
            <h2>Leave a Comment...</h2>
            <textarea value={this.state.text} onChange={this.inputText} className="form-text" name="text" rows="10" cols="60"/>
        </form>
        )
    }

    scene2 = () => {
        return(
            <h1>Hi</h1>
        )
    }

    scene3 = () => {
        return(
            <h1>Hello</h1>
        )
    }


    scenes = [this.scene1, this.scene2, this.scene3]

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
        return(
            <div onClick={this.handleClick} className="form-container">
                <div onClick={this.handleChildClick} className="form-div">
                    {this.renderScene()}
                    <div className="form-button-container">
                        {this.state.scene > 1 ? <button onClick={this.decrementScene}>Previous</button> : null}
                        {this.state.scene !== this.scenes.length ? <button onClick={this.incrementScene}>Next</button> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default FormContainer