 import { useState } from "react";
import Task from "./Task";
function App() {

   const[val, setVal] = useState();
   
   const[arr, setArr] = useState([]);

   const add = ()=>{
      setArr([...arr, val]);
      setVal("");
      console.log(arr);
   }

   const deletefn = (index)=>{
      const filterarr = arr.filter((item, idx)=>{
        return index !== idx;
      })
      setArr(filterarr);
   }

  return (
    <div className="App">
       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/> 
      
       <button onClick={add}>Add</button>

<br />
       {
        arr.map((item, index)=>( 
    <>
        <Task  key={index} val={item} deletefn={deletefn} index={index} />
    </>
          )
        )

    
       }
    </div>
  );
}

export default App;
