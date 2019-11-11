import React from 'react';
import './css/SearchBar.css'


const SearchBar = (props) => {
        return ( 
            <div>
                <form className="search-form">
                    <input onChange={props.handleChange} value={props.searchValue} id="search-field" type="text" placeholder="Search Recipe" autocomplete="off" />
                    <input id="submit-btn" type="image" value = "submit" src="https://www.freeiconspng.com/uploads/search-icon-png-1.png"/>
                </form>
            </div> 
        );
}
 
export default SearchBar;