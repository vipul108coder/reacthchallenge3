import React from "react";
const Task = ({val, index, deletefn})=>{

    return (
     <>
         {val}
         <button onClick={()=>deletefn(index)}>-</button> 
         <br />
     </>
    )
}

export default Task;