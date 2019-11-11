import React from 'react';
import './css/CarouselContainer.css'
import {Carousel} from 'react-bootstrap';
import SingleCarousel from '../component/SingleCarousel'


const CarouselContainer = (props) => {
    let CarouselRecipes= props.carouselRecipes;
    const renderCarousel = () => CarouselRecipes.map(recipe => <Carousel.Item><SingleCarousel key={recipe.name} recipe = {recipe} /></Carousel.Item>)
    return (
        <Carousel>
            {renderCarousel()}
        </Carousel>
    )
    }

 
export default CarouselContainer;