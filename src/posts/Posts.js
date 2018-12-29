import React from 'react';

const Posts = (posts) => {

    return (
        <ul>
            {
                posts.posts.map((post, key) => {
                	console.log(post.data)
                    return(<li key={key}>{post.data.title}</li>)
                })
            }
        </ul>
    );
}

export default Posts;