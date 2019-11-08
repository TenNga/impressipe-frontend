import React, {Component} from 'react'
import SearchBar from '../component/SearchBar'
import './NavBar.css'
class NavBar extends Component {
    render(){
        return(
            <div className="nav-bar">
                <h1>Impressipe</h1>
                <SearchBar />
            </div>
        )
    }
}
export default NavBar;