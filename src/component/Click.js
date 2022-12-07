// import { useState } from "react";
import "./Hover.css";
import HOC  from "../hocs/HOC"

function Click({count, increment}) {
//   const [count, setCount] = useState(0);
//   function increment() {
//     setCount(count + 1);
//   }
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click count</button>
    </>
  );
}

export default HOC(Click)
