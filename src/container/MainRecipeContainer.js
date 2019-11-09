import React from 'react'
import CategoryContainer from './CategoryContainer'

const MainRecipeContainer = () => {
    let category=[1,2,3,4,5]
    const renderCategory = () => {
        return category.map(c => <CategoryContainer/>)
    }
    return(
        renderCategory()
    )
}
export default MainRecipeContainer;
