import React from 'react';
import './css/CarouselContainer.css'
import {Carousel} from 'react-bootstrap';
import SingleCarousel from '../component/SingleCarousel'


const CarouselContainer = (props) => {
    let carouselRecipes= props.carouselRecipes;
    const renderCarouselItem = (recipe, header) => {
   return <Carousel.Item key={recipe.id}><SingleCarousel header={header} key={recipe.id} recipe={recipe} /></Carousel.Item>}
    const renderCarousel = () => carouselRecipes.map(categoryObj => categoryObj.recipes.length? renderCarouselItem(categoryObj.recipes[Math.floor(Math.random()*categoryObj.recipes.length)], categoryObj.header):null)
    return (
        <Carousel interval={5000}>
            {renderCarousel()}
        </Carousel>
    )
    }

 
export default CarouselContainer;