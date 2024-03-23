import StudentLottie from "../Lotties/student";
import TeacherLottie from "../Lotties/teacher";

export default function StudentTeacher(){
    return(
        <>
        <div className="flex justify-center">
            <h1 className=" text-2xl font-semibold text-center pt-9">Signup As:</h1>
        </div>
        <div className="flex justify-center">
            <div class="grid  mb-6 lg:mb-16 md:grid-cols-2 m-10 " style={{gap:'9rem'}}>
                
<a href="/StudentPortal" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-violet-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative overflow-hidden" style={{width:400}}>
    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-violet-400 transition-all duration-300"></div>
    <StudentLottie />
    <h5 class="mb-2 text-2xl text-center pt-5 font-bold tracking-tight text-gray-900 dark:text-white">Student</h5>
</a>
<a href="/TeacherPortal" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-violet-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-violet-400 transition-all duration-300"></div>
    <TeacherLottie/>
    <h5 class="mb-2 text-2xl text-center pt-5 font-bold tracking-tight text-gray-900 dark:text-white">Teacher</h5>
</a>



            </div>
        </div>
        </>
    )
}