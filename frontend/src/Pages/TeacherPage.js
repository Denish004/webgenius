import React, { useState } from 'react';
import TeacherAssignments from '../Components/TeacherAssignments';
import AddOption from '../Components/AddOption';
import Header from '../Components/Header';
function TeacherPage() {
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



//    const handleInputChange = (e) => {
//         setNewMessage(e.target.value); // Update the newMessage state with user input
//     };
  return (
    <div className="App">
       <Header />
     <AddOption />
     <TeacherAssignments />
     {/* <TeacherAssignments />
     <TeacherAssignments />

     <TeacherAssignments /> */}
    </div>
  );
}

export default TeacherPage;
