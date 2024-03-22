import { StudentContext } from "../context/StudentContext";
// to consume/use the context import useContext
import { useContext } from "react";

export const useStudentContext=()=>{
    const context=useContext(StudentContext) //line to use the context we created
    if(!context){
        throw Error('useStudentContext must be used inside an StudentContextProvider ')
        //hence we wrapped app with WorkoutContextProvider?
    }
    
   return {
        ...context,
        dispatch: context.dispatch,
       
}
}