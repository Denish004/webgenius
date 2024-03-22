import Announcement from "../Components/Announcements";
import Courses from "../Components/Courses";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Welcome from "../Components/Welcome";
import CalendarComponent from "../Components/WorkToDo";

export default function TeacherPortal(){
    return(
      //   <div className="flex bg-gray-100">
      // <div className="w-1/4"><Sidebar /></div>
      
      // <div className="flex-grow pl-5">
      //   <Navbar />
        <div>
        <Welcome />
        <div className="flex">
          <div className="w-3/5"><Courses/></div>
          <div className="block"><Announcement/>
          <CalendarComponent/></div>
          
          </div>
          </div>
        
    //   </div>
    // </div>
    )
}