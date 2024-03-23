import React from 'react'
import { useState ,useEffect} from 'react'
import { useLogin } from '../hooks/useLogin'
import Signin_lottie from '../Lotties/bg'
import Lottie1 from '../Lotties/Lottie1'


const Login_new = () => {
  const {login, error, isLoading} = useLogin()
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");


 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("1")
    login(email,password)
 }


  

  return (
    <>
<div style={{position:'absolute',top:'0',left:'0', width:'100%',height:'100%',zIndex:'-1'}}><Signin_lottie/></div>
<div class="h-full ">
<section class=" dark:bg-gray-900 h-full">
    <div class="py-24 px-4 mx-auto max-w-screen-xl lg:py-28 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
            <Lottie1/>

        </div>
        <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                   Log In 
                </h2>
                <form class="mt-8 space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input     onChange={(e)=>{setEmail(e.target.value)}} type="email"  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>  
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input  onChange={(e)=>{setPassword(e.target.value)}} type="password"  name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    
                    
                    <div>
                    <a href="/" onClick={handleSubmit} type="submit" class="w-full  px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</a>
                    </div>
                    
                    
                    
                    
                    
                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                        Not registered yet? <a href="signup" class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</section>

    </div>
    </>
  )
}

export default Login_new
