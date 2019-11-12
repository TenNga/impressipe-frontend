import React from 'react';
import './css/IngAndEqContainer.css'

const IngAndEqContainer = (props) => {
   
    const renderIng = () => { 
        let currentIngredient = props.AllIngredients;
        if(props.currentStepIngredient)
            currentIngredient = props.currentStepIngredient.map(ing => ing.name)
        return props.AllIngredients.map(ing => <li key={ing.id}><span className={currentIngredient.includes(ing.name)? "currentStepStyle" : ""}>{ing.name}</span><span>{ing.quantity} {ing.unit}</span></li>)
    // const renderIng = () => {
    //     return props.ingredients.map(ing => <li><span>{ing.name}</span><span>{ing.quantity} {ing.unit}</span></li>)
    }

    const renderEquipment = () => {
        return props.equipments.map(equipment => <li key={equipment.name}>{equipment.name}</li>)
    }
    return(
        <div className="sideBar">
            <div className="ingredientList">
                <h4>Ingredients</h4>
                    <ul>
                        {renderIng()}
                    </ul>
            </div>
            <div className="equipmentList">
                <h4>Equipment</h4>
                <ul>
                    {renderEquipment()}
                </ul>
            </div>
        </div>
    )
}
export default IngAndEqContainer;