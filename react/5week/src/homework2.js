import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);           //второй вариант (x => x + 1)
      return () => clearInterval(id);
    }, []);                           //первый вариант [count]

    return <h1>{count}</h1>;
  });
}
