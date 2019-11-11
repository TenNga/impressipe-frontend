import React, {Component, Fragment} from 'react'
import SearchBar from '../component/SearchBar'
import SearchPrediction from './SearchPredection'
import './css/NavBar.css'

class NavBar extends Component {
    state={
        searchValue: ""
    }
    
    updateSearchValue = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    resetSearchValue = () => {
        this.setState({
            searchValue: ""
        })
    }

    filterByName = () => {
        return this.props.recipes.filter(recipe=>recipe.name.toLowerCase().includes(this.state.searchValue))
    }

    render(){
        return(
            <Fragment>
                <div className="nav-bar">
                    <img src='/impressipe.png' />
                    <SearchBar searchValue={this.state.searchValue} handleChange={this.updateSearchValue}/>
                </div>

                {this.state.searchValue ? 
                    <SearchPrediction 
                        searchValue={this.state.searchValue}
                        recipes={this.filterByName()}
                        resetSearchValue={this.resetSearchValue}
                    /> 
                    : null
                }
            </Fragment>
        )
    }
}
export default NavBar;