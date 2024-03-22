
// import { useAuthContext } from './hooks/useAuthContext'

// import Homepage from "./Pages/Homepage";
// import StudentPortal from "./Pages/StudentPortal";
// import TeacherPortal from "./Pages/TeacherPortal";
// import Login_new from "./Pages/Login_new.jsx"
// import Signup_new from "./Pages/Signup_new.jsx"
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Profile from './Pages/Profile.js';
// import Page2 from "./Pages/Page2.js"
// import Page from "./Pages/Page.js"


// function App() {
//   const { user } = useAuthContext()
//   return (
//     // <Homepage/>
//     // <StudentPortal/>
//     // <TeacherPortal/>

//     <div>
//        <BrowserRouter>
//           <Routes>
//               <Route path="/" element={<Page2/>}>
//               <Route index element = {<Homepage/>}></Route>
//               <Route path="login" element={<Login_new/>}/>
//               <Route path="signup" element={<Signup_new/>}/>
//               </Route>
              
//               <Route path="StudentPortal" element={<Page/>}>
//               <Route index element={<StudentPortal/>}/>
//               <Route path='profile' element={<Profile/>}/>
//               </Route>

//               <Route path="TeacherPortal" element={<Page/>}>
//               <Route index element ={<TeacherPortal/>}/>
//               </Route>
                
              
              
              
//           </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import { useAuthContext } from './hooks/useAuthContext'
// import Homepage from "./Pages/Homepage";
// import StudentPortal from "./Pages/StudentPortal";
// import TeacherPortal from "./Pages/TeacherPortal";
// import Login_new from "./Pages/Login_new.jsx"
// import Signup_new from "./Pages/Signup_new.jsx"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Profile from './Pages/Profile.js';
// import Page2 from "./Pages/Page2.js"
// import Page from "./Pages/Page.js"
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';

// function App() {
//   const { user } = useAuthContext()

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomepageWithoutSidebar/>}>
//           <Route index element={<Homepage/>} />
//           <Route path="login" element={<Login_new/>} />
//           <Route path="signup" element={<Signup_new/>} />
//         </Route>
        
//         <div>
//     <div className="flex bg-gray-100">
//       <div className="w-1/4"><Sidebar /></div>
//       <div className="flex-grow pl-5">
//         <Navbar />
        
//           <Route path="StudentPortal" element={<StudentPortal/>} />
//           <Route path='profile' element={<Profile/>} />
//           <Route path="TeacherPortal" element={<TeacherPortal/>} />
//       </div>
//     </div>
//     </div>
        
//       </Routes>
//     </BrowserRouter>
//   );
// }



// export default App;
import { useAuthContext } from './hooks/useAuthContext';
import Homepage from "./Pages/Homepage";
import Register from './Pages/Register.js';
import StudentPortal from "./Pages/StudentPortal";
import TeacherPortal from "./Pages/TeacherPortal";
import Login_new from "./Pages/Login_new.jsx";
import Signup_new from "./Pages/Signup_new.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Pages/Profile.js';
import Page2 from "./Pages/Page2.js";
import Page from "./Pages/Page.js";
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

function App() {
  const { user } = useAuthContext();

  const HomepageWithoutSidebar = () => (
    <>
      <Homepage />
      <Routes><Route path="login" element={<Login_new />} />
      <Route path="signup" element={<Signup_new />} /></Routes>
      
    </>
  );

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomepageWithoutSidebar />} />
          <Route path="StudentPortal/*" element={<StudentPortalWithSidebar />} />
          <Route path="TeacherPortal/*" element={<TeacherPortalWithSidebar />} />
          <Route path="profile" element={<ProfileWithSidebar />} />
          <Route path="register" element={<RegisterWithSidebar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const StudentPortalWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5">
      <Navbar />
      <StudentPortal />
    </div>
  </div>
);

const TeacherPortalWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5">
      <Navbar />
      <TeacherPortal />
    </div>
  </div>
);

const ProfileWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5">
      <Navbar />
      <Profile />
    </div>
  </div>
);

const RegisterWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5">
      <Navbar />
      <Register />
    </div>
  </div>
);

export default App;
