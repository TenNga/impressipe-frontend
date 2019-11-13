import React from 'react';
import './css/Comment.css'

const Comment = (props) => {
    const { comment } = props
    return (
        <div className="comments">
            {comment.image_url?<img onClick={(event)=>props.toggleModal(event, comment.image_url)} src={comment.image_url} alt="foodImage" />:null}
            <div className="comment-body">
                <h4>{comment.author}</h4>
                <p>{comment.text}</p>
            </div>
        </div>
    )
}
export default Comment