//you import context from react
import { createContext, useReducer } from "react";

//this is how you create a context Provider
export const StudentContext=createContext()

//createContext->Provider (providing context)
//useContext->Consumer  (consuming context)

// export const studentReducer=(state,action)=>{
//     switch(action.type){
//         case 'SET_STUDENT':
//             return{
//                 student:action.payload
//             }
//         case 'CREATE_STUDENT':
//             return{
//                 student:[action.payload, ...state.student]
//             }
//         case 'DELETE_STUDENT':

//             return{
//                 student:state.student.filter((s)=>s._id!==action.payload._id)
               
//             }
//         default:
//             return state
//     }
// }

export const studentReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STUDENT':
            return {
                student: action.payload // Changed
            };
        case 'CREATE_STUDENT':
            return {
                student: [action.payload, ...state.student] // Changed
            };
        case 'DELETE_STUDENT':
            return {
                student: state.student.filter((s) => s._id !== action.payload._id) // Changed
            };
        default:
            return state;
    }
};

//workoutReducer function ends

 export const StudentContextProvider=({children})=>{
    const [state,dispatch]=useReducer(studentReducer,{ //reducer function(workoutReducer)
        student:[] //initial value
    })
    return(
        <StudentContext.Provider value={{...state,dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}
