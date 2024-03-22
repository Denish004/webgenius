// import React from 'react';
// import { useState } from "react"
// import WavesLottie from '../Lotties/waves';
// // import {useWorkoutContext}  from "../hooks/useWorkoutContext"
// // import { useAuthContext } from "../hooks/useAuthContext"


    

// function Form() {

   
//   return (
//     <div>
          

        
//       <section className="registration-container bg-white rounded-md p-4 m-4 shadow-lg shadow-violet-500" style={{backgroundImage:"url('https://hack-x-celerate.vercel.app/static/media/pattern4.d70898849577572cae6e.png')"}}>
//         <h2 className="text-xl font-bold text-center mb-4 relative pb-1">
//   Student Registration
//   <span className="absolute bottom-0 mt-1 left-1/2 transform -translate-x-1/2 h-1  bg-violet-600 rounded" style={{width:130}}></span>
// </h2>

//         <section className="details-section">
//           <form action="" className="registration-form" >
//             {/* Personal Details Section */}
//             <h4 className=" text-violet-600 font-bold text-lg mb-4"> Personal Details </h4>
//             <section className="personal-details">
//               <div className="flex flex-wrap mb-4 ">
//                 <label htmlFor="name" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Full Name</p>
//                   <input type="text" name="name" id="name" placeholder="Enter your name" className="input-field" />
//                 </label>
//                 <label htmlFor="fName" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Father's Name</p>
//                   <input type="text" name="fName" id="fName" placeholder="Enter father name" className="input-field" />
//                 </label>
//                 <label htmlFor="mName" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Mother's Name</p>
//                   <input type="text" name="mName" id="mName" placeholder="Enter mother name" className="input-field" />
//                 </label>
//               </div>
//               <div className="flex flex-wrap mb-4">
//                 <label htmlFor="DOB" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Date of Birth</p>
//                   <input type="text" name="DOB" id="DOB" placeholder="Enter your DOB" className="input-field" />
//                 </label>
//                 <label htmlFor="aadharNo" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Aadhar Number</p>
//                   <input type="text" name="aadharNo" id="aadharNo" placeholder="Enter aadhar number" className="input-field" />
//                 </label>
//                 <label htmlFor="email" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Email</p>
//                   <input type="email" name="email" id="email" placeholder="Enter your email" className="input-field" />
//                 </label>
//               </div>
//               <div className="flex flex-wrap mb-4">
//                 <label htmlFor="ph" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Mobile Number</p>
//                   <input type="tel" name="phone" id="ph" placeholder="Enter mobile number" className="input-field" />
//                 </label>
//                 <label htmlFor="gender" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Gender</p>
//                   <input type="text" name="gender" id="gender" placeholder="Enter your gender" className="input-field" />
//                 </label>
//                 <label htmlFor="accNo" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Registration Number</p>
//                   <input type="text" name="accNo" id="accNo" placeholder="Enter account number" className="input-field" />
//                 </label>
//               </div>
//             </section>
//             <hr className="w-3/4 my-4 border-gray-400" />
//             {/* Identity Details Section */}
//             <h4 className="font-bold text-lg mb-4 text-violet-600"> Other Details </h4>
//             <section className="identity-details">
//               <div className="flex flex-wrap mb-4">
//                 <label htmlFor="stream" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Branch</p>
//                   <input type="text" name="stream" id="stream" placeholder="Enter your stream" className="input-field" />
//                 </label>
//                 <label htmlFor="previousClass" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Year of Study</p>
//                   <input type="text" name="previousClass" id="previousClass" placeholder="Enter previous class" className="input-field" />
//                 </label>
//                 <label htmlFor="hobbies" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Semester</p>
//                   <input type="text" name="hobbies" id="hobbies" placeholder="Enter your hobbies" className="input-field" />
//                 </label>
//               </div>
//               <div className="flex flex-wrap mb-4">
//                 <label htmlFor="address" className="w-full md:w-1/3 mb-2 md:mb-0">
//                   <p className="font-semibold">Address</p>
//                   <input type="text" name="address" id="address" placeholder="Enter your Address" className="input-field" />
//                 </label>
                
               
//               </div>
//             </section>
//             <button className="submit-btn bg-violet-600 hover:bg-violet-800 text-white py-2 px-4 rounded-md block mx-auto mt-4"> Submit </button>
//           </form>
//         </section>
//        </section>
//    </div>
//   );
// }

// export default Form;

import React from 'react';
import { useState } from "react"
import {useStudentContext}  from "../hooks/useStudentContext"
// import { useAuthContext } from "../hooks/useAuthContext"


    

function Form() {

    const [type,setType]=useState('disabled')

    const {dispatch}=useStudentContext()
    const [name, setName] = useState("");
    const [error, seterror] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [DOB, setDOB] = useState("");
    const [aadharNo, setAadharNo] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [sem, setSem] = useState("");
    const [regNo, setRegNo] = useState("");
    const [emptyFields,setemptyFields]=useState([])
    // const {user}=useAuthContext()

    const handleSubmit= async (e)=>{
        e.preventDefault()

    //     if(!user){
    //         seterror('You must be logged in')
    //         return
    //     }

        const student={name,
            fName,
            mName,
            DOB,
            aadharNo,
            email,
            phone,
            gender,
            address,
            branch,
            year,
            sem,
            regNo}

           
        const response=await fetch('api/student',{ //theek karo
            method:'POST',
            body:JSON.stringify(student),
            headers:{
                'Content-Type':'application/json'
                // 'Authorization':`Bearer ${user.token}`
            }
        })
        const json= await response.json()

        if(!response.ok){
            console.log(json.error)
            seterror(json.error)
            setemptyFields(json.emptyFields)
        }
        if(response.ok){
            setName("")
            setFName("");
            setMName("");
            setDOB("");
            setAadharNo("");
            setEmail("");
            setPhone("");
            setGender("");
            setAddress("");
            setBranch("");
            setYear("");
            setSem("");
            setRegNo("");

            seterror(null)
            setemptyFields([])
            console.log("New student added",json)
            dispatch({type:'CREATE_STUDENT',payload:json})
        }
    }
  return (
    
    <div>
          

        
      <section className=" registration-container bg-white rounded-md p-4 m-4 shadow-lg shadow-violet-500" style={{backgroundImage:"url('https://hack-x-celerate.vercel.app/static/media/pattern4.d70898849577572cae6e.png')"}}>
        <h2 className="text-xl font-bold text-center mb-4 relative pb-1">
  Student Registration
  <span className="absolute bottom-0 mt-1 left-1/2 transform -translate-x-1/2 h-1  bg-violet-600 rounded" style={{width:130}}></span>
</h2>

        <section className="details-section">
          <form action="" className="registration-form" onSubmit={handleSubmit}>
            {/* Personal Details Section */}
            <h4 className=" text-violet-600 font-bold text-lg mb-4"> Personal Details </h4>
            <section className="personal-details">
              <div className="flex flex-wrap mb-4 ">
                <label htmlFor="name" className="w-full md:w-1/3 mb-2 md:mb-0">
                  <p className="font-semibold">Full Name</p>
                  <input type="text" name="name"  id="name" placeholder="Enter your name" className="input-field" disabled={type=='disabled'}/>
                </label>
                              <label htmlFor="fName" className="w-full md:w-1/3 mb-2 md:mb-0">
                                  <p className="font-semibold">Father's Name</p>
                                  <input
                                      type="text"
                                      id="fName"
                                      name="fName"
                                      placeholder="Enter father name"
                                      onChange={(e) => setFName(e.target.value)}
                                      value={fName}
                                      className={`input-field ${emptyFields.includes('fName') ? 'error' : ''}`}
                                      disabled={type=='disabled'}
                                  />
                              </label>

                              <label htmlFor="mName" className="w-full md:w-1/3 mb-2 md:mb-0">
                                  <p className="font-semibold">Mother's Name</p>
                                  <input
                                      type="text"
                                      id="mName"
                                      name="mName"
                                      placeholder="Enter mother name"
                                      onChange={(e) => setMName(e.target.value)}
                                      value={mName}
                                      className={`input-field ${emptyFields.includes('mName') ? 'error' : ''}`}
                                      disabled={type=='disabled'}
                                  />
                              </label>
                               </div>
                              <div className="flex flex-wrap mb-4">
                                  <label htmlFor="DOB" className="w-full md:w-1/3 mb-2 md:mb-0">
                                      <p className="font-semibold">Date of Birth</p>
                                      <input
                                          type="text"
                                          id="DOB"
                                          name="DOB"
                                          placeholder="Enter your DOB"
                                          onChange={(e) => setDOB(e.target.value)}
                                          value={DOB}
                                          className={`input-field ${emptyFields.includes('DOB') ? 'error' : ''}`}
                                          disabled={type=='disabled'}
                                      />
                                  </label>

                                  <label htmlFor="aadharNo" className="w-full md:w-1/3 mb-2 md:mb-0">
                                      <p className="font-semibold">Aadhar Number</p>
                                      <input
                                          type="text"
                                          id="aadharNo"
                                          name="aadharNo"
                                          placeholder="Enter aadhar number"
                                          onChange={(e) => setAadharNo(e.target.value)}
                                          value={aadharNo}
                                          className={`input-field ${emptyFields.includes('aadharNo') ? 'error' : ''}`}
                                          disabled={type=='disabled'}
                                      />
                                  </label>

                              <label htmlFor="email" className="w-full md:w-1/3 mb-2 md:mb-0">
                                  <p className="font-semibold">Email</p>
                                  <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      placeholder="Enter your email"
                                      onChange={(e) => setEmail(e.target.value)}
                                      value={email}
                                      className={`input-field ${emptyFields.includes('email') ? 'error' : ''}`}
                                      disabled={type=='disabled'}
                                      />
                              </label>
                                      </div>

                              <div className="flex flex-wrap mb-4">
                                  <label htmlFor="ph" className="w-full md:w-1/3 mb-2 md:mb-0">
                                      <p className="font-semibold">Mobile Number</p>
                                      <input
                                          type="tel"
                                          id="ph"
                                          name="phone"
                                          placeholder="Enter mobile number"
                                          onChange={(e) => setPhone(e.target.value)}
                                          value={phone}
                                          className={`input-field ${emptyFields.includes('phone') ? 'error' : ''}`}
                                          disabled={type=='disabled'}
                                      />
                                  </label>

                                  <label htmlFor="gender" className="w-full md:w-1/3 mb-2 md:mb-0">
                                      <p className="font-semibold">Gender</p>
                                      <input
                                          type="text"
                                          id="gender"
                                          name="gender"
                                          placeholder="Enter your gender"
                                          onChange={(e) => setGender(e.target.value)}
                                          value={gender}
                                          className={`input-field ${emptyFields.includes('gender') ? 'error' : ''}`}
                                          disabled={type=='disabled'}
                                      />
                                  </label>

                                  <label htmlFor="regNo" className="w-full md:w-1/3 mb-2 md:mb-0">
                                      <p className="font-semibold">Registration Number</p>
                                      <input
                                          type="text"
                                          id="regNo"
                                          name="regNo"
                                          placeholder="Enter registration number"
                                          onChange={(e) => setRegNo(e.target.value)}
                                          value={regNo}
                                          className={`input-field ${emptyFields.includes('regNo') ? 'error' : ''}`}
                                          disabled={type=='disabled'}
                                      />
                                  </label>
                              </div>

             
            </section>
            <hr className="w-3/4 my-4 border-gray-400" />
            {/* Identity Details Section */}
            <h4 className="font-bold text-lg mb-2 text-violet-600"> Other Details </h4>
            <section className="identity-details">
              <div className="flex flex-wrap mb-4">
              <label htmlFor="stream" className="w-full md:w-1/3 mb-2 md:mb-0">
    <p className="font-semibold">Branch</p>
                                  <input
                                      type="text"
                                      id="stream"
                                      name="stream"
                                      placeholder="Enter your branch"
                                      onChange={(e) => setBranch(e.target.value)}
                                      value={branch}
                                      className={`input-field ${emptyFields.includes('branch') ? 'error' : ''}`}
                                      disabled={type=='disabled'}
                                  />
                              </label>

                              <label htmlFor="previousClass" className="w-full md:w-1/3 mb-2 md:mb-0">
                                  <p className="font-semibold">Year of Study</p>
                                  <input
                                      type="text"
                                      id="previousClass"
                                      name="previousClass"
                                      placeholder="Enter year of study"
                                      onChange={(e) => setYear(e.target.value)}
                                      value={year}
                                      className={`input-field ${emptyFields.includes('year') ? 'error' : ''}`}
                                      disabled={type=='disabled'}
                                  />
                              </label>

                              <label htmlFor="hobbies" className="w-full md:w-1/3 mb-2 md:mb-0">
                                  <p className="font-semibold">Semester</p>
                                  <input
                                      type="text"
                                      id="hobbies"
                                      name="hobbies"
                                      placeholder="Enter your semester"
                                      onChange={(e) => setSem(e.target.value)}
                                      value={sem}
                                      className={`input-field ${emptyFields.includes('sem') ? 'error' : ''}`}
                                      disabled={type=='disabled'}
                                  />
                              </label>


                
               
              </div>
                              <div className="flex flex-wrap mb-4">
                                  <label htmlFor="address" className="w-full md:w-full mb-2 md:mb-0">
                                      <p className="font-semibold">Address</p>
                                      <input
                                          type="text"
                                          id="address"
                                          name="address"
                                          placeholder="Enter your Address"
                                          onChange={(e) => setAddress(e.target.value)}
                                          value={address}
                                          className={`input-field ${emptyFields.includes('address') ? 'error' : ''}`}
                                          disabled={type=='disabled'}
                                      />
                                  </label>
                              </div>
            </section>
            <button className="submit-btn bg-violet-600 hover:bg-violet-800 text-white py-2 px-4 rounded-md block mx-auto mt-4"> Submit </button>
            {error && <div className='error'>{error}</div>}

          </form>
        </section>
      </section>
    </div>
  );
}

export default Form;

