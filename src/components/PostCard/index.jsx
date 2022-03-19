import React from "react";
import "./styles.css"
import P from 'prop-types'

export const PostCard = ({ post }) => (
    <div className="post">
      <img src={post.cover} alt={post.title}></img>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );

PostCard.propTypes = {
    post: P.object
}
