import React from 'react';
import './css/Comment.css'

const Comment = () => {
    return (
        <div className="comments">
            <img onClick={(event)=>this.toggleModal(event, "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")} src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="foodImage" />
            <div className="comment-body">
                <h4>Pongo</h4>
                <p>Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!</p>
            </div>
        </div>
    )
}
export default Comment