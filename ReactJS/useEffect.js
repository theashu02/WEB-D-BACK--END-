// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';



const App = ()=> {
  const [counter, setCounter] = useState(0);
   
  // the first is counter that is set to be 0 initially 
  // setCounter take logic to increase and and decrease the count

  useEffect(() => {
    alert("you set counter to " + counter);
  }, [counter]);

  return(
    <div className="App">
      <button onClick={() => setCounter((prevcount) => prevcount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevcount) => prevcount + 1)}>+</button>
    </div>
  )
}

export default App;
