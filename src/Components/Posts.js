import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({Posts}) => {
  
  return (
    <div id='div element'>
      {
        Posts.map((post) => {
          const {title, description, location, price, _id, isAuthor} = post;
          return(
          <div key ={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            {
              isAuthor ? (
                <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
              ) : (
                <Link to={`/posts/${_id}`}>View</Link>

              )
            }
          </div>
            
         )
        })
      }
    </div>
  )
}

export default Posts;
