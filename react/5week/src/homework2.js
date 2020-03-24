import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);           //второй вариант: заменить (count + 1) на (count => count + 1)
      return () => clearInterval(id);
    }, []);                           //первый вариант: заменить [] на [count]

    return <h1>{count}</h1>;
  });
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
