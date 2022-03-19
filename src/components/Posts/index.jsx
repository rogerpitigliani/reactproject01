import React from 'react';
import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((p) => (
      <PostCard key={p.id} post={p} />
    ))}
  </div>
);

Posts.defaultProps = {
    posts: []
}

Posts.propTypes = {
    posts: P.array
}
