import React from 'react';
import { Banner } from 'flowbite-react';


import  { useRef, useState, useEffect } from 'react';
import axios from 'axios';
function Assignments() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/assignmnets')
            .then(res => {
                const postData = res.data;
                setPosts(postData);
                console.log("student ",posts);
            })
            .catch(err => console.log(err));
    }, []);
    const handleDelete = (id) => {
        // event.preventDefault();
        axios.delete(`http://localhost:3000/assignmnets/${id}`)
          .then(res => {
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
            console.log('Item deleted successfully');
          })
          .catch(err => console.log(err));
      };
      const handleUpload = (files, postId) => {
    // Logic to handle the file upload
    console.log("Files:", files);
    console.log("Post ID:", postId);
    // Add your file upload logic here
  };
  return (
    <Banner>
    {posts.map(post => (
      <div key={post.id} className="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">{post.title}</h2>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            {post.subject}: {post.description}
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <input
  type="file"
  className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
  onChange={(event) => handleUpload(event.target.files, post.id)}
/>
          <a
            href="#"
            className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            onClick={() => handleDelete(post.id)}
         >
            
            Submit
          </a>
          <a
            href="#"
            className="mr-2 inline-flex items-center justify-center rounded-lg bg-violet-500 px-3 py-2 text-xs font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            
          >Delete
          </a>
          <span>Deadline: {post.due_date}</span>
        </div>
      </div>
    ))}
  </Banner>
  );
}

export default Assignments;
