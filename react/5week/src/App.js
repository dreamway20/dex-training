import React from 'react';
import './App.css';
import { Counter } from './homework2.js';

function FuncComponent() {
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

class ClassComponent extends React.Component {
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
      <button onClick={() => setState(!state)}>toggle to {state ? 'class' : 'function'}</button>
      {state ? <FuncComponent /> : <ClassComponent />}

      <p> второе задание <Counter /></p>
    </div>

    )
}

export default App;
