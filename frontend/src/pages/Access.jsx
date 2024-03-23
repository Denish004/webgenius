// // import React from 'react'
// // import  { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Access = () => {
// //     const [posts, setPosts] = useState([]);
// //     const [newMessage, setNewMessage] = useState("");
// //     useEffect(() => {
// //         axios.get('http://localhost:3000/posts')
// //             .then(res => {
// //                 const postData = res.data;
// //                 setPosts(postData);
// //             })
// //             .catch(err => console.log(err));
// //     }, []);
  
// //     const createPost = () => {
// //         const newPost = {
// //             "message": newMessage,
// //             "permission": false
// //         };
// //         // Add the new post to the UI
// //         setPosts(prevPosts => [...prevPosts, newPost]);
        
// //         // Send a POST request to the API endpoint
// //         axios.post('http://localhost:3000/posts', newPost)
// //             .then(response => {
// //                 console.log('New post added successfully:', response.data);
// //             })
// //             .catch(error => {
// //                 console.error('Error adding new post:', error);
// //             });

// //         // Clear the input field after creating the post
// //         setNewMessage("");
// //     };

// //     const handleInputChange = (e) => {
// //         setNewMessage(e.target.value); // Update the newMessage state with user input
// //     };

// //   return (
// //     <div>
      
// {/* <form class="max-w-sm mx-auto">
//   <label for="message" class=" font-black block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Message</label>
//   <textarea  value={newMessage} onChange={handleInputChange} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
 
// </form>
// <div class="flex justify-center items-center mt-3">
//   <button type="button" onCLick={createPost}class="text-white   bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Send Request</button>
//   </div>
//     </div> */}
// //   )
// // }





// // export default Access


// const Request = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3000/posts')
//             .then(res => {
//                 const postData = res.data;
//                 setPosts(postData);
//             })
//             .catch(err => console.log(err));
//     }, []);

//     const [newMessage, setNewMessage] = useState("");

//     const createPost = () => {
//         const newPost = {
//             "message": newMessage,
//             "permission": false
//         };
//         // Add the new post to the UI
//         setPosts(prevPosts => [...prevPosts, newPost]);
        
//         // Send a POST request to the API endpoint
//         axios.post('http://localhost:3000/posts', newPost)
//             .then(response => {
//                 console.log('New post added successfully:', response.data);
//             })
//             .catch(error => {
//                 console.error('Error adding new post:', error);
//             });

//         // Clear the input field after creating the post
//         setNewMessage("");
//     };
//     const updatePost = (id, updatedData) => {
//         // Send a PATCH request to the API endpoint to update the post
//         axios.patch(`http://localhost:3000/0/posts/${id}`, updatedData)
//             .then(response => {
//                 console.log('Post updated successfully:', response.data);
//                 // Update the UI with the updated post data
//                 setPosts(prevPosts =>
//                     prevPosts.map(post =>
//                         post.id === id ? { ...post, ...updatedData } : post
//                     )
//                 );
//             })
//             .catch(error => {
//                 console.error('Error updating post:', error);
//             });}
//     const handleInputChange = (e) => {
//         setNewMessage(e.target.value); // Update the newMessage state with user input
//     };

    
// console.log(posts);
//     return (
//         <>
//         <div>
//             {/* <h1>Posts</h1>
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>
//                         <h2>{post.title}</h2>
//                         <p>Views: {post.views}</p>
//                     </li>
//                 ))}
//             </ul> */}

//             <div>
//             <h1>Posts</h1>
//             {/* <input
//                 type="text"
//                 placeholder="Enter message"
//                 value={newMessage}
//                 onChange={handleInputChange}
//             /> */}


//             <button onClick={createPost}>Create Post</button>
//             <ul>
//                 {posts.map((post, index) => (
//                     <li key={index}>
//                         <h2>{post.message || post.title}</h2>
//                         <p>Views: {post.views}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>

//         <form class="max-w-sm mx-auto">
//   <label for="message" class=" font-black block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Message</label>
//   <textarea  value={newMessage} onChange={handleInputChange} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
 
// </form>
// <div class="flex justify-center items-center mt-3">
//   <button type="button" onCLick={createPost}class="text-white   bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Send Request</button>
//   </div>
//     </div>
       
//  </>
//     );
// };

// export default Request




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
            });
    };
    const handleInputChange = (e) => {
        setNewMessage(e.target.value); // Update the newMessage state with user input
    };

    
console.log(posts);
    return (
        <><div class="bg-cover bg-no-repeat bg-center bg-[url('https://hack-x-celerate.vercel.app/static/media/pattern4.d70898849577572cae6e.png')]" >
           
        <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 m-4">
            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                            </svg>
                            <span class="sr-only">Attach file</span>
                        </button>
                        {/* Add other buttons here */}
                    </div>
                </div>
            </div>
            <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                <label for="editor" class="sr-only">Publish post</label>
                <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write Your Message..." value={newMessage} onChange={handleInputChange} required />
            </div>
        </div>
        <div class="flex justify-center items-center">
        <button type="button" onClick={createPost} class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Publish post
        </button>
        </div>
        
    </form>

    <h1 className="text-xl font-bold mt-4 mb-2 text-center flex items-center justify-center">My Requests</h1>



            <ul>
                {posts.map((post, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded-lg mb-2">
                        <p className="text-gray-800">{post.message}</p>
                    </li>
                ))}
            </ul>

            </div>
    </>
    );
};

export default Request;

