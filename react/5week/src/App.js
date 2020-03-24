import React, { useState } from 'react';
import './App.css';

function FuncComponent() {
  const [count, setCount] = React.useState(0);
  const mutableCount = React.useRef(0);

  React.useEffect(() => {
    setTimeout(() => console.log(mutableCount.current), 3000);
  });
  const increment = () => {
    setCount(count + 1);
    mutableCount.current = count + 1;
  }
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

class ClassComponent extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    setTimeout(() => console.log(this.state.count), 3000);
  }

  componentDidUpdate() {
    setTimeout(() => console.log(this.state.count), 3000);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>
      </div>
    )
  }
}

function FuncComponent2() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => console.log(count), 3000);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

class ClassComponent2 extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    setTimeout(() => console.log(this.state.count), 3000);
  }

  componentDidUpdate() {
    const count = this.state.count
    setTimeout(() => console.log(count), 3000);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>
      </div>
    )
  }
}

function App() {
  const [state, setState] = React.useState(true);

  return (
    <div>
      <h2>Class behavior</h2>
      <button onClick={() => setState(!state)}>toggle to {state ? 'class' : 'function'}</button>
      {state ? <FuncComponent /> : <ClassComponent />}

      <h2>Function behavior</h2>
      <button onClick={() => setState(!state)}>toggle to {state ? 'class' : 'function'}</button>
      {state ? <FuncComponent2 /> : <ClassComponent2 />}
    </div>
  )
}

export default App;