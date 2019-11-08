import React, {Component} from 'react';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form>
                    <input type="text" placeholder="Search Recipe" />
                    <input type="submit" value="search" />
                </form>
            </div> 
        );
    }
}
 
export default SearchBar;