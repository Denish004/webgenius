import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

const AddOption = () => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");
//   const [posts, setPosts] = useState({});
//   const[title,setTitle]=useState('');
//   const[description,setDescription]=useState('');




 const [posts, setPosts] = useState([]);
 const[title,setTitle]=useState('');
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

     const createPost = () => {
              const newPost = {
                "title":title,
                "subject":subject,
                "description":description,
                "due_date":due_date
              };
              console.log(newPost);
              // Add the new post to the UI
              setPosts(prevPosts => [...prevPosts, newPost]);
              
              // Send a POST request to the API endpoint
              axios.post('http://localhost:3000/assignmnets', newPost)
                  .then(response => {
                      console.log('New post added successfully:', response.data);
                  })
                  .catch(error => {
                      console.error('Error adding new post:', error);
                  });
        
              // Clear the input field after creating the post
              setNewMessage("");
              window.location.reload();

          };
        
        
        
         const handleInputChange = (e) => {
              setNewMessage(e.target.value); // Update the newMessage state with user input
          };

  return (
    <><div className='flex justify-center'>
        <Button className="text-white bg-purple-800 mt-4 mb-4" onClick={() => setOpenModal(true)}>
        Add Assignment
            </Button>
    </div>
      
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
          
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create New Assignment</h3>
          
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Assignmnet Name" />
              </div>
              <textarea onChange={(e)=>{setTitle(e.target.value)}} id="chat" rows="1" class="block mr-5 mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your asignment name..."></textarea>
                {/* <TextInput onChange={(e)=>{setTitle(e.target.value)}} id="assignment" ref={emailInputRef} placeholder="Type assignmnet name" required /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="subject" value="Subject"  />
              </div>
              <textarea onChange={(e)=>{setSubject(e.target.value)}} id="chat" rows="1" class="block mr-5 mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your subject name..."></textarea>
              {/* <TextInput onChange={(e)=>{setSubject(e.target.value)}} id="subject" type="subject" required placeholder='Type Subject Name' /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Deadline" />
              </div>
              
              <textarea onChange={(e)=>{setDueDate(e.target.value)}} id="chat" rows="1" class="block mr-5 mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Due Date..."></textarea>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Description" />
              </div>
              <textarea onChange={(e)=>{setDescription(e.target.value)}} id="chat" rows="1" class="block mr-5 mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Assignment description..."></textarea>
              {/* <TextInput onChange={(e)=>{setDueDate(e.target.value)}} id="deadline" type="deadline" required placeholder='Type deadline' /> */}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Done</Label>
              </div>
              
            </div>
            <div className="w-full">
              <Button >Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Cancel
              </a>
                 <button onClick={createPost}>
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create assignment
              </a>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddOption;

