import { useState } from "react";
import ProfileLottie from "../Lotties/profile";
import TeacherProfileLottie from "../Lotties/teacherprofile"
import { useAuthContext } from "../hooks/useAuthContext";
export default function Sidebar(){
   const {user, dispatch } = useAuthContext()
    return(
<div>
   

<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0 w-1/4" 
// style={{width:'20rem'}} 
aria-label="Sidebar">
   
   <div className="h-full px-3 py-4 overflow-y-auto" style={{ margin: '18px', borderRadius: '25px', backgroundImage: 'linear-gradient(to bottom, #d8baff, #6a5acd)' }}>



      <ul class="space-y-2 font-medium">
        {user && user.userType==='Student' &&<li>
         
            <ProfileLottie/>
        </li>}
        {user && user.userType==='Teacher' && <li>
         <TeacherProfileLottie/>
         </li>}

         <li>
            <a href="/profile" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <img src="https://cdn-icons-png.freepik.com/256/1077/1077012.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="ms-3 ">Profile</span>
            </a>
         </li>
         {user && user.userType=='Student' &&<li>
            <a href="/register" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1598/1598584.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Student Registeration</span>
               
            </a>
         </li>}
         {user && user.userType=='Teacher' &&<li>
            <a href="/grant" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1598/1598584.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Request</span>
               
            </a>
         </li>}
        {user && user.userType=='Student' && <li>
            <a href="/courseregi" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1642/1642789.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Course Registeration</span>
            </a>
         </li>}
        {user && user.userType=='Student' &&<li>
            <a href="/library" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1837/1837945.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Library</span>
            </a>
         </li>}
        {user && user.userType=='Teacher' &&<li>
            <a href="/fileupload" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1837/1837945.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Upload Files</span>
            </a>
         </li>}
         {user && user.userType=='Student' &&<li>
            <a href="/student" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1643/1643269.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Assignments</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>}
         {user && user.userType=='Teacher' &&<li>
            <a href="/teacher" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/1643/1643269.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Assignments</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>}
         {user && user.userType=='Student' &&<li>
            <a href="/hall-ticket" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/166/166162.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Hall Ticket</span>
            </a>
         </li>}
         <li>
            <a href="/StudentPortal" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <img src="https://cdn-icons-png.freepik.com/256/553/553416.png?ga=GA1.1.1255800410.1704448219&"/>
               </div>
               <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
            </a>
         </li>
      </ul>
   </div>
</aside>


</div>

    )
}