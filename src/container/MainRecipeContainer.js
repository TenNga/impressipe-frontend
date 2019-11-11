import React from 'react'
import CategoryContainer from './CategoryContainer'

const MainRecipeContainer = (props) => {
    let categories = props.categories
    
    const renderCategory = () => {
        return categories.map(category => <CategoryContainer category = {category} />)
    }
    return(
        renderCategory()
    )
}
export default MainRecipeContainer;
