import React from 'react';
import {Carousel} from 'react-bootstrap';
import './css/SingleCarousel.css';

const SingleCarousel = (props) => {
    console.log("Props Carousel, ", props.recipe)
    if(props.recipe.recipe)
        return(
            <div className="single-carousel">
                <img
                className="d-block w-100"
                src={props.recipe.recipe.image_url}
                alt="First slide"
                />
                <Carousel.Caption className="description">
                <h3>{props.recipe.header}</h3>
                <p>{props.recipe.recipe.name}</p>
                <button>Details</button>
                </Carousel.Caption>
            </div>
        )
    else 
        return (
            <div>
                <h4>Loading...</h4>
                <img src="/loading.gif" />
            </div>
        )
}
export default SingleCarousel