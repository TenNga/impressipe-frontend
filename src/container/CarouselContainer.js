import React from 'react';
import './CarouselContainer.css'
import {Carousel} from 'react-bootstrap';
import SingleCarousel from '../component/SingleCarousel'

    let data= [1,2,3]
    const renderCarousel = () => data.map(d => <Carousel.Item><SingleCarousel /></Carousel.Item>)
    
    const CarouselContainer = () => {
    return (
        <Carousel>
            {renderCarousel()}
        </Carousel>
    )
    }

 
export default CarouselContainer;