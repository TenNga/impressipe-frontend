import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form>
                    <input id="search-field" type="text" placeholder="Search Recipe" />
                    <input id="submit-btn" type="submit" value="search" />
                </form>
            </div> 
        );
    }
}
 
export default SearchBar;