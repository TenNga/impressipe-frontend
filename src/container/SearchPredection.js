import React from 'react';
import './css/SearchPrediction.css';
import { Link } from 'react-router-dom'

const SearchPrediction = (props) => {

    const renderItems = () => {
        const arr = props.recipes.map(recipe=>{
            return (
            <Link key={recipe.id} onClick={props.resetSearchValue} to={"/recipes/" + recipe.id}>
                <li>
                    <img src={recipe.image_url} alt={recipe.name}/>
                    <h5>{recipe.name}</h5>
                </li>
            </Link>
            )
        })
        if(arr.length){
            return arr
        }else return <h4>{"No Results found for " + props.searchValue}</h4>
    }

    return (
        <div className="search-prediction">
            <h4>Results for: {props.searchValue}</h4>
            <ul>
                {renderItems()}
            </ul>
        </div>
    )
}

export default SearchPrediction;