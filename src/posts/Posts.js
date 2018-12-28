import React from 'react';

const Posts = (posts) => {

    return (
        <ul>
            {
                posts.posts.map((post, key) => {
                    return(<li key={key}>{post.data.title}</li>)
                })
            }
        </ul>
    );
}

export default Posts;