import React from 'react'
import './css/FormContainer.css'

const FormContainer = (props) => {

    const handleClick = (event) => {
        props.closeModal()
    }

    const handleChildClick = (event) => {
        event.stopPropagation()
    }

    return(
        <div onClick={handleClick} className="form-container">
            <div onClick={handleChildClick} className="form-div">
            {props.img? <img src={props.img} /> :
                <form className="form">
                    <textarea className="form-text" name="text" rows="10" cols="60"/>
                </form>}
            </div>
        </div>
    )

}

export default FormContainer