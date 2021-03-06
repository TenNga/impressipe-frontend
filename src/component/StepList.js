import React, { Component } from 'react';
import './css/StepList.css';
import nToW from 'number-to-words';

class StepList extends Component {

    state = {
        currentStep : 1
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    currentStepStyle = (stepNum) => {
        this.setState({currentStep: stepNum})
        this.props.handleSelectedStep(stepNum)
    }

    renderStepList = () => {
        if(this.props.steps)
            return this.props.steps.map((step) => {
            return <li 
                key={step.id}
                onClick={()=>this.currentStepStyle(step.number)}
                className={this.state.currentStep===step.number? "current-step" : ""}
                >
                    {"Step "+ this.capitalize(nToW.toWords(parseInt(step.number))) }
                </li>
            })
    }
    render(){
        return(
            <div className="step-list">
                <ul >
                    {this.renderStepList()}
                    {/* <li className="current-step">Step One</li>
                    <li>Step Two</li>
                    <li>Step Three</li>
                    <li>Step Four</li>
                    <li>Step Five</li>
                    <li>Step Six</li>
                    <li>Step Seve</li>
                    <li>Step Eight</li>
                    <li>Step Nine</li>
                    <li>Step Ten</li> */}
                </ul>
            </div>
        )
    }
}
export default StepList;