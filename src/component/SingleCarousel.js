import React from 'react';
import {Carousel} from 'react-bootstrap';

const SingleCarousel = () => {
    return(
        <div>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </div>
    )
}
export default SingleCarousel