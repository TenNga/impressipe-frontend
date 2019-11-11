import React from 'react';
import './css/IngAndEqContainer.css'

const IngAndEqContainer = (props) => {
    const renderIng = () => {
        return props.ingredients.map(ing => <li>{ing.name}</li>)
    }

    const renderEquipment = () => {
        return props.equipments.map(equipment => <li>{equipment.name}</li>)
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