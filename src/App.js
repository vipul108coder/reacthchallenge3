 import "./App.css"
 import { useState } from "react";
import ProgressBar from "./ProgressBar";
function App() {

   const[val, setVal] = useState();


  return (
    <div className="App">
      
      <ProgressBar width={val}/>
       <input type="text" onChange={(e)=>setVal(e.target.value)}/> 
    </div>
  );
}

export default App;
