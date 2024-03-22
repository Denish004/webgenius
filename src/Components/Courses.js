export default function Courses(){
    return(
        <div className="w-fit px-5 pl-10">
            <div className="flex py-5 items-center justify-between">
    <h1 className="font-semibold text-left text-2xl">Courses:</h1>
    <p className="font-medium text-right text-lg text-blue-500 cursor-pointer hover:underline">Show all</p>
</div>
 
<div class="grid grid-cols-1 gap-4">
    <a href="#" class=" flex flex-col items-center bg-white border border-violet-400  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{width:540,height:200,borderWidth:2}}>
        <img class=" p-5 object-cover w-full rounded-t-lg h-76 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn-icons-png.freepik.com/256/11631/11631007.png?ga=GA1.1.1255800410.1704448219&" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 pl-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Operating System</h5>
            
        </div>
    </a>
    <a href="#" class=" flex flex-col items-center bg-white border border-violet-400  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{width:540,height:200,borderWidth:2}}>
        <img class=" p-5 object-cover w-full rounded-t-lg h-76 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn-icons-png.freepik.com/256/9504/9504222.png?ga=GA1.1.1255800410.1704448219&" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 pl-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Database Management</h5>
            
        </div>
    </a>
    <a href="#" class=" flex flex-col items-center bg-white border border-violet-400  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{width:540,height:200,borderWidth:2}}>
        <img class=" p-5 object-cover w-full rounded-t-lg h-76 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn-icons-png.freepik.com/256/3343/3343709.png?ga=GA1.1.1255800410.1704448219&" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 pl-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Algorithm</h5>
            
        </div>
    </a>
    <a href="#" class=" flex flex-col items-center bg-white border border-violet-400  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" style={{width:540,height:200,borderWidth:2}}>
        <img class=" p-5 object-cover w-full rounded-t-lg h-76 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://cdn-icons-png.freepik.com/256/7890/7890736.png?ga=GA1.1.1255800410.1704448219&" alt=""/>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 pl-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Statistics and Data Analysis</h5>
            
        </div>
    </a>
    
    
</div>



        </div>
    )
}