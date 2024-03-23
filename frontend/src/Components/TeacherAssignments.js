


import  { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Banner } from 'flowbite-react';


function TeacherAssignments() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const[subject, setSubject]=useState("")
    const[due_date, setDueDate]=useState("")
    useEffect(() => {
        axios.get('http://localhost:3000/assignmnets')
            .then(res => {
                const postData = res.data;
                setPosts(postData);
                console.log("Teacher ",posts);
            })
            .catch(err => console.log(err));
    }, []);

    //  const createPost = () => {
    //           const newPost = {
    //             "title":title,
    //             "subject":subject,
    //             "description":description,
    //             "due_date":due_date
    //           };
    //           // Add the new post to the UI
    //           setPosts(prevPosts => [...prevPosts, newPost]);
              
    //           // Send a POST request to the API endpoint
    //           axios.post('http://localhost:3000/assignmnets', newPost)
    //               .then(response => {
    //                   console.log('New post added successfully:', response.data);
    //               })
    //               .catch(error => {
    //                   console.error('Error adding new post:', error);
    //               });
        
    //           // Clear the input field after creating the post
    //           // setNewMessage("");
    //       };
        
          const handleDelete = (id) => {
            // event.preventDefault();
            axios.delete(`http://localhost:3000/assignmnets/${id}`)
              .then(res => {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
                console.log('Item deleted successfully');
              })
              .catch(err => console.log(err));
          };
        
        //  const handleInputChange = (e) => {
        //       setNewMessage(e.target.value); // Update the newMessage state with user input
        //   };

    console.log("Teahcer",posts);
  return (
    <>
    {posts.map(post => (
        <Banner key={post.id}>
          <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-4">
              <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">{post.title}</h2>
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                {post.subject}: {post.description}
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <a
                href="#"
                className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                {/* <FaBookOpen className="mr-2 h-4 w-4" /> */}
                Deadline: {post.due_date}
              </a>
              {/* <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                <HiX className="h-4 w-4" />
              </Banner.CollapseButton> */}
              <button onClick={()=>handleDelete(post.id)}>delele
</button>
            </div>
          </div>
        </Banner>
      ))}
      </>
  );
}

export default TeacherAssignments;
