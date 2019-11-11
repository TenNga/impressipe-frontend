import React from 'react';
import './css/StepList.css';

const StepList = (props) => {
    const renderStepList = () => {
        if(props.steps)
            return props.steps.map(step => <li>{"Step " + Object.keys(step) }</li>)
    }
    return(
        <div className="step-list">
            <ul >
                {renderStepList()}
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
export default StepList;