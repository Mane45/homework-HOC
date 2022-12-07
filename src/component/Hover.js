// import { useState } from "react";
import "./Hover.css";
import HOC from '../hocs/HOC';

function Hover({count, increment}) {
//   const [count, setCount] = useState(0);
//   function increment() {
//     setCount(count+1)
//   }
console.log(count);
  return (
    <>
      <p>You hover {count} times</p>
      <button onMouseOver={increment}>Hover count</button>
    </>
  );
}

export default HOC(Hover)
