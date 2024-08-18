import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steper, setSteper] = useState(0);
  const [counter, setCounter] = useState(0);
  const todayDate = new Date("june 21 2027");
  todayDate.setDate(todayDate.getDate() + counter);

  function addSteper() {
    setSteper((s) => s + 1);
  }
  function mindsetSteper() {
    setSteper((s) => s - 1);
  }
  function addCount() {
    setCounter((c) => c + steper);
  }

  function mindsetCount() {
    setCounter((c) => c - steper);
  }
  return (
    <>
      <div>
        <button onClick={addSteper}>+</button>
        Step:{steper}
        <button onClick={mindsetSteper}>-</button>
      </div>
      <div>
        <button onClick={addCount}>+</button>
        Counter:{counter}
        <button onClick={mindsetCount}>-</button>
      </div>
      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{todayDate.toString()}</span>
      </p>
    </>
  );
}
