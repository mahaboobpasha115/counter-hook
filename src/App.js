import React, {useState} from "react";

function App() {


  const [count, incrementCount]= useState(0); 

  return (
    <div className="App">
     <button onClick={()=>incrementCount(count+1)}>count {count}</button>
    </div>
  );
}

export default App;
