import React from 'react';
import {Carousel} from 'react-bootstrap';
import './css/SingleCarousel.css';
import {Link} from 'react-router-dom'

const SingleCarousel = (props) => {
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
                <Link to={"/recipes/" + props.recipe.recipe.id}>
                    <button>Details</button>
                </Link>
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