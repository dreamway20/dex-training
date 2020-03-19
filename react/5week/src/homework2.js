import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);           //второй вариант (count => count + 1)
      return () => clearInterval(id);
    }, []);                           //первый вариант [count]

    return <h1>{count}</h1>;
  });
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
