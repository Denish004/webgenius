
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
import Upload from './Pages/Upload.js';
import Library from './Pages/Library.js';

import Request from './Pages/Request'
import Access from './Pages/Access';
import Grant from './Pages/Grant';
import HallTicket from './Pages/hallTicket';
import OS from './Pages/os';
import DBMS from './Pages/DBMS';

import TeacherPage from './Pages/TeacherPage';
import StudentPage from './Pages/StudentPage';

function App() {
  const { user } = useAuthContext();

  
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/login' element={<Login_new/>}></Route>

 <Route path='/signup' element={<Signup_new/>}></Route>
{/*<Route path='/request' element={<Request/>}></Route>
<Route path='/access' element={<Access/>}></Route>
<Route path='/grant' element={<Grant/>}></Route>
<Route path='/hall-ticket' element={<HallTicket/>}></Route>
<Route path='/teacher' element={<TeacherPage/>}></Route>
<Route path='/student' element={<StudentPage/>}></Route> */}
          <Route path="contact" element={<Contact/>}/>
          <Route path="StudentPortal/*" element={<StudentPortalWithSidebar />} />
          <Route path="TeacherPortal/*" element={<TeacherPortalWithSidebar />} />
          <Route path="profile" element={<ProfileWithSidebar />} />
          <Route path="register" element={<RegisterWithSidebar />} />
          <Route path="courseregi" element={<CourseRegiWithSidebar/>}/>
          <Route path="fileupload" element={<FileUploadWithSidebar/>}/>
          <Route path="library" element={<LibraryWithSidebar/>}/>
          <Route path="request" element={<RequestWithSidebar/>}/>
          <Route path="access" element={<AccessWithSidebar/>}/>
          <Route path="grant" element={<GrantWithSidebar/>}/>
          <Route path="hall-ticket" element={<HallWithSidebar/>}/>
          <Route path="teacher" element={<TeacherWithSidebar/>}/>
          <Route path="student" element={<StudentWithSidebar/>}/>
          <Route path="OS" element={<OSWithSidebar/>}/>
          <Route path="DBMS" element={<DBMSWithSidebar/>}/>
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

const FileUploadWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <Upload/>
    </div>
  </div>
);

const LibraryWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <Library/>
    </div>
  </div>
);
const RequestWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <Request/>
    </div>
  </div>
);
const AccessWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <Access/>
    </div>
  </div>
);
const GrantWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <Grant/>
    </div>
  </div>
);
const HallWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <HallTicket/>
    </div>
  </div>
);
const TeacherWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <TeacherPage/>
    </div>
  </div>
);
const StudentWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <StudentPage/>
    </div>
  </div>
);
const DBMSWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <DBMS/>
    </div>
  </div>
);
const OSWithSidebar = () => (
  <div className="flex bg-gray-100">
    <div className="w-1/4"><Sidebar /></div>
    <div className="flex-grow pl-5 " >
      <Navbar />
      <OS/>
    </div>
  </div>
);

export default App;
