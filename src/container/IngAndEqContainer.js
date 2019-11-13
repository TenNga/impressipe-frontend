import React from 'react';
import './css/IngAndEqContainer.css'

const IngAndEqContainer = (props) => {
   
    const renderIng = () => { 
        let ingWithStyle = [];
        let ingWithoutStyle = [];
        let currentIngredient = props.AllIngredients;
        if(props.currentStepIngredient){
            currentIngredient = props.currentStepIngredient.map(ing => ing.name)
            props.AllIngredients.map(ing => {currentIngredient.includes(ing.name)? ingWithStyle.push(<li key={ing.id}><span className="currentStepStyle">{ing.name}</span><span>{ing.quantity} {ing.unit}</span></li>) : ingWithoutStyle.push(<li key={ing.id}><span className="">{ing.name}</span><span>{ing.quantity} {ing.unit}</span></li>) 
            })
            return [...ingWithStyle,...ingWithoutStyle];
        }
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