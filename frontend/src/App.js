
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
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Contact from './Pages/ContactUs.js';
import CourseRegi from './Pages/CourseRegi.js';

function App() {
  const { user } = useAuthContext();

  
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
    <Route path="login" element={<Login_new />} />
    <Route path="signup" element={<Signup_new />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="StudentPortal/*" element={<StudentPortalWithSidebar />} />
          <Route path="TeacherPortal/*" element={<TeacherPortalWithSidebar />} />
          <Route path="profile" element={<ProfileWithSidebar />} />
          <Route path="register" element={<RegisterWithSidebar />} />
          <Route path="courseregi" element={<CourseRegiWithSidebar/>}/>
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
    <div className="flex-grow pl-5 " >
      <Navbar />
      <Register />
    </div>
  </div>
);

const CourseRegiWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <CourseRegi/>
    </div>
  </div>
);

export default App;
