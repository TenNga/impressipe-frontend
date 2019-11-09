import React, {Component} from 'react';
import './css/SearchBar.css'

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form className="search-form">
                    <input id="search-field" type="text" placeholder="Search Recipe" />
                    <input id="submit-btn" type="image" value = "submit" src="https://www.freeiconspng.com/uploads/search-icon-png-1.png"/>
                </form>
            </div> 
        );
    }
}
 
export default SearchBar;