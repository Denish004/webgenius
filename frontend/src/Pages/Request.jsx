import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Request = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                const postData = res.data;
                setPosts(postData);
            })
            .catch(err => console.log(err));
    }, []);

    const [newMessage, setNewMessage] = useState("");

    const createPost = () => {
        const newPost = {
            "message": newMessage,
            "permission": false
        };
        // Add the new post to the UI
        setPosts(prevPosts => [...prevPosts, newPost]);
        
        // Send a POST request to the API endpoint
        axios.post('http://localhost:3000/posts', newPost)
            .then(response => {
                console.log('New post added successfully:', response.data);
            })
            .catch(error => {
                console.error('Error adding new post:', error);
            });

        // Clear the input field after creating the post
        setNewMessage("");
    };
    const updatePost = (id, updatedData) => {
        // Send a PATCH request to the API endpoint to update the post
        axios.patch(`http://localhost:3000/0/posts/${id}`, updatedData)
            .then(response => {
                console.log('Post updated successfully:', response.data);
                // Update the UI with the updated post data
                setPosts(prevPosts =>
                    prevPosts.map(post =>
                        post.id === id ? { ...post, ...updatedData } : post
                    )
                );
            })
            .catch(error => {
                console.error('Error updating post:', error);
            });}
    const handleInputChange = (e) => {
        setNewMessage(e.target.value); // Update the newMessage state with user input
    };

    
console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>Views: {post.views}</p>
                    </li>
                ))}
            </ul>

            <div>
            <h1>Posts</h1>
            <input
                type="text"
                placeholder="Enter message"
                value={newMessage}
                onChange={handleInputChange}
            />
            <button onClick={createPost}>Create Post</button>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h2>{post.message || post.title}</h2>
                        <p>Views: {post.views}</p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default Request