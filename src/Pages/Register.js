import { useEffect, useState } from "react"
import Form from "../Components/Forms";


const Register=()=>{


    
    // useEffect(()=>{
    //     const fetchWorkouts = async () => {
    //         try {
    //             const response = await fetch('/api/workouts',{
    //                 headers:{
    //                     'Authorization':`Bearer ${user.token}`
    //                 } 
    //             });
    //             const json = await response.json();

    //             if (!response.ok) {
    //                 throw new Error(`Failed to fetch workouts. Status: ${response.status}`);
    //             }

    //             dispatch({ type: 'SET_WORKOUTS', payload: json });
                
    //         } catch (error) {
    //             console.error('Error fetching workouts:', error);
                
    //         }
    //     };
    //     if(user)
    //     {
    //         fetchWorkouts();
    //     }
        
    // },[dispatch,user])


    return(
        // <div className="home">
        //   <div className="workouts">
        //   {workouts && workouts.map((workout)=>(
        //     <WorkDetails key={workout._id} workout={workout}  />
        //   ))}

        //   </div>
        //   <WorkForm />
        // </div>
        <Form/>
    )
}

export default Register