
import Announcement from "./Components/Announcements";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Welcome from "./Components/Welcome";
import CalendarComponent from "./Components/WorkToDo";
import Homepage from "./Pages/Homepage";
import StudentPortal from "./Pages/StudentPortal";
import TeacherPortal from "./Pages/TeacherPortal";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    // <Homepage/>
    // <StudentPortal/>
    // <TeacherPortal/>

    <div>
       <BrowserRouter>
          <Routes>
              <Route path="StudentPortal" element={<StudentPortal/>}/>
              <Route path="/" element={<Homepage/>}/>
              <Route path="TeacherPortal" element={<TeacherPortal/>}/>
              
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
