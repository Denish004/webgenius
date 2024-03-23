
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import toast, { Toaster } from 'react-hot-toast';

// toast.success('Successfully toasted!')

export default function CourseRegi(){
  const notify = () => toast('Here is your toast.');
  const [type,setType]=useState('')
  const {user}=useAuthContext()
  const [state, setState] = useState({
    name:'Keshav',
    DAA: false,
    OS: false,
    DIA: false,
    DBMS: false,
    TOC: false,
    OSC:false
  });

let email = "Dhanvi@gmail.com";
 let username=email.split('@')[0];

  const HandleClick = (e) => {
    setState({ ...state, [e.target.name]: true });
  };
console.log(state)
const handleChange = () => { 
    
  console.log('The checkbox was toggled'); 
  
}; 
  const HandleSubmit = async(e) => {
    toast.success('Courses registered successfully!');

    setType('disabled')
    e.preventDefault();
    console.log("hello")
    setState({...state})
    console.log("hello")
    console.log({...state})
    const response = await fetch("http://localhost:8080/api/courseRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({ ...state }),
    });
    if (!response) {
      console.log("error");
    }
    const json = await response.json();
    console.log(json);
        toast.success('Courses registered successfully!');

  };
  return(
      
  
  <div>
        

      
    <section className=" registration-container bg-white rounded-md p-4 m-4 shadow-lg shadow-violet-500" style={{backgroundImage:"url('https://hack-x-celerate.vercel.app/static/media/pattern4.d70898849577572cae6e.png')"}}>
      <h2 className="text-xl font-bold text-center mb-4 relative pb-1">
Course Registration
<span className="absolute bottom-0 mt-1 left-1/2 transform -translate-x-1/2 h-1  bg-violet-600 rounded" style={{width:130}}></span>
</h2>

      <section className="details-section">
        <form action="" className="registration-form" 
      //   onSubmit={handleSubmit}
        >
          <div class="hover:-translate-y-1 flex mt-5  items-center justify-between mb-6 border-2 bg-gray-100 border-violet-500" style={{ borderRadius: 15, padding: 10 }}>

              
  <div className="flex items-center"><input id="default-checkbox" type="checkbox" onClick={HandleClick} value="DBMS" name="DBMS" class="ml-5 w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled={type=='disabled'}/>
  <label for="default-checkbox" class="ms-2 text-2xl font-lg text-gray-900 dark:text-gray-300">DBMS</label></div>
  
  <h1 className="text-center">V.B.Nikam</h1>
</div>
          <div class="hover:-translate-y-1 flex  items-center justify-between mb-6 border-2 bg-gray-100 border-violet-500" style={{ borderRadius: 15, padding: 10 }}>

              
  <div className="flex items-center"><input id="default-checkbox" type="checkbox" onClick={HandleClick} name="OS" value="OS" class="ml-5 w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled={type=='disabled'}/>
  <label for="default-checkbox" class="ms-2 text-2xl font-lg text-gray-900 dark:text-gray-300">OS</label></div>
  
  <h1 className="text-center">V.B.Nikam</h1>
</div>
          <div class="hover:-translate-y-1 flex  items-center justify-between mb-6 border-2 bg-gray-100 border-violet-500" style={{ borderRadius: 15, padding: 10 }}>

              
  <div className="flex items-center"><input id="default-checkbox" type="checkbox" onClick={HandleClick} name="DAA" value="DAA" class="ml-5 w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled={type=='disabled'}/>
  <label for="default-checkbox" class="ms-2 text-2xl font-lg text-gray-900 dark:text-gray-300">DAA</label></div>
  
  <h1 className="text-center">V.B.Nikam</h1>
</div>
          <div class="hover:-translate-y-1 flex  items-center justify-between mb-6 border-2 bg-gray-100 border-violet-500" style={{ borderRadius: 15, padding: 10 }}>

              
  <div className="flex items-center"><input id="default-checkbox" type="checkbox" onClick={HandleClick} name="DIA" value="DIA" class="ml-5 w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled={type=='disabled'}/>
  <label for="default-checkbox" class="ms-2 text-2xl font-lg text-gray-900 dark:text-gray-300">DIA</label></div>
  
  <h1 className="text-center">V.B.Nikam</h1>
</div>
          <div class="hover:-translate-y-1 flex  items-center justify-between mb-6 border-2 bg-gray-100 border-violet-500" style={{ borderRadius: 15, padding: 10 }}>

              
  <div className="flex items-center"><input id="default-checkbox" type="checkbox"  onClick={HandleClick} name="TOC" value="TOC" class="ml-5 w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled={type=='disabled'}/>
  <label for="default-checkbox" class="ms-2 text-2xl font-lg text-gray-900 dark:text-gray-300">TOC</label></div>
  
  <h1 className="text-center">V.B.Nikam</h1>
</div>
          <div class="hover:-translate-y-1 flex  items-center justify-between mb-6 border-2 bg-gray-100 border-violet-500" style={{ borderRadius: 15, padding: 10 }}>

              
  <div className="flex items-center"><input id="default-checkbox" type="checkbox" value="OSC" name="OSC" onClick={HandleClick}   class="ml-5 w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled={type=='disabled'}/>
  <label for="default-checkbox" class="ms-2 text-2xl font-lg text-gray-900 dark:text-gray-300">OSC</label></div>
  
  <h1 className="text-center">V.B.Nikam</h1>
</div>

  <button  type="button" className=" bg-violet-600 hover:bg-violet-800 text-white py-2 px-4 rounded-md block mx-auto mt-4" onClick={(e) => {HandleSubmit(e)}}> Submit </button>
 <Toaster/>
          
      
          {/* Personal Details Section */}
                      <Toaster />

        </form>
      </section>
    </section>
  </div>
);
  
}


