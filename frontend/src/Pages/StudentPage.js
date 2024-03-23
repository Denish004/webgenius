import React from 'react';
import { useEffect,useState } from 'react';
import Assignments from '../Components/Assignments';
import axios from 'axios';
import Header from '../Components/Header';
function StudentPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:3000/assignmnets')
          .then(res => {
              const postData = res.data;
              setPosts(postData);
              console.log("agayakya ",posts);
          })
          .catch(err => console.log(err));
  }, []);
console.log(posts);
  return (
    <div className="App">
 <Header />
     <Assignments />
     {/* <Assignments />
     <Assignments /> */}
     
    </div>
  );
}

export default StudentPage;
