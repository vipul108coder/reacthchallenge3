import React from "react";
import "./App.css"
const ProgressBar = ({width})=>{

    return (
     <div  className="parent">
    
        {
width >= 0 && width <= 100 ?

<div className="child" style={{width:`${width*(20/100)}rem`}}>
{width}
</div>:alert("please anter valid number")

        }
      

 
     </div>
    )
}

export default ProgressBar;