import React, {useState} from "react";

function App() {
 const initialCount = 0;
 const[count ,setCount]= useState(initialCount);

 const incrementFive=()=>{
   for(let i=0;i<5;i++){
     setCount(prevCount=>prevCount+1)
   }
 }

  return (
    <div className="App">
     count: {count}
     <button onClick={()=>setCount(prevCount => prevCount + 1)}>increment</button>
     <button onClick={()=>setCount(prevCount => prevCount - 1)}>decrement</button>
     <button onClick={incrementFive}>increment 5</button>
     <button onClick={()=>setCount(initialCount)}>reset</button>
    </div>
  );
}

export default App;
