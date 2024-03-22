import bg from "../Assets/featuresbg-removebg.png"
export default function Features(){
    return(
        <div>
            <section class=" dark:bg-gray-900" style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class=" mb-8 lg:mb-16 text-center">
          <h2 class="mb-4 text-4xl tracking-tight text-center  font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          
          
          
<div className="border-purple-600 relative hover:-translate-y-5 bg-violet-200" style={{ border: '2px solid', borderRadius: 15, padding: 15 }}>
    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 " style={{width:80,height:80}}>
        <img src="https://cdn-icons-png.freepik.com/256/4797/4797052.png?ga=GA1.1.1255800410.1704448219" class="object-contain w-full h-full" alt="Finance" />
    </div>
    <h3 class="mb-2 text-xl font-bold dark:text-white text-center">Finance</h3>
    <p class="text-gray-500 dark:text-gray-400 text-center">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
</div>
<div className="border-purple-600 relative hover:-translate-y-5 bg-violet-200" style={{ border: '2px solid', borderRadius: 15, padding: 15 }}>
    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 " style={{width:80,height:80}}>
        <img src="https://cdn-icons-png.freepik.com/256/3976/3976631.png?ga=GA1.1.1255800410.1704448219&" class="object-contain w-full h-full" alt="Finance" />
    </div>
    <h3 class="mb-2 text-xl font-bold dark:text-white text-center">Finance</h3>
    <p class="text-gray-500 dark:text-gray-400 text-center">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
</div>
<div className="border-purple-600 relative hover:-translate-y-5 bg-violet-200" style={{ border: '2px solid', borderRadius: 15, padding: 15 }}>
    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 " style={{width:80,height:80}}>
        <img src="https://cdn-icons-png.freepik.com/256/2415/2415896.png?ga=GA1.1.1255800410.1704448219&" class="object-contain w-full h-full" alt="Finance" />
    </div>
    <h3 class="mb-2 text-xl font-bold dark:text-white text-center">Finance</h3>
    <p class="text-gray-500 dark:text-gray-400 text-center">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
</div>


            
      </div>
  </div>
</section>
        </div>
    )
}