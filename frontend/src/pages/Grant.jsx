import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Grant = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                const postData = res.data;
                setPosts(postData);
            })
            .catch(err => console.log(err));
    }, []);

    const handleApprove = (postId) => {
        // Find the post with the given id
        const postToUpdate = posts.find(post => post.id === postId);
        
        // Update the access field of the post
        const updatedPost = { ...postToUpdate, access: !postToUpdate.access };
        
        // Send a PATCH request to update the post on the server
        axios.patch(`http://localhost:3000/posts/${postId}`, updatedPost)
            .then(response => {
                console.log('Post updated successfully:', response.data);
                // Update the local state with the updated post
                setPosts(prevPosts =>
                    prevPosts.map(post =>
                        post.id === postId ? updatedPost : post
                    )
                );
            })
            .catch(error => {
                console.error('Error updating post:', error);
            });
    };

    return (
        <>
        <div class="bg-cover bg-no-repeat bg-center bg-[url('https://hack-x-celerate.vercel.app/static/media/pattern4.d70898849577572cae6e.png')]" ></div>
        <h1 className="text-xl font-bold mt-4 mb-2 text-center flex items-center justify-center">My Requests</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index} className={`relative bg-gradient-to-r from-violet-500 to-fuchsia-500 transform transition duration-300 bg-gray-100 p-3 rounded-lg mb-2 hover:scale-105 ${post.access ? 'bg-green-200' : ''}`}>
              <button onClick={() => handleApprove(post.id)} className="absolute top-2 right-2 inline-flex items-center px-2 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                {post.access ? 'Remove Approval' : 'Approve'}
              </button>
              <p className="ml-2 inline text-gray-800">{post.name}:</p>
              <p className="ml-2 inline text-gray-800">{post.message}:</p>
            </li>
          ))}
        </ul>
        </>
      );
};

export default Grant;