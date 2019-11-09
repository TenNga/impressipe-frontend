import React, {Component} from 'react'
import SearchBar from '../component/SearchBar'
import './css/NavBar.css'
class NavBar extends Component {
    render(){
        return(
            <div className="nav-bar">
                <img src='impressipe.png' />
                <SearchBar />
            </div>
        )
    }
}
export default NavBar;