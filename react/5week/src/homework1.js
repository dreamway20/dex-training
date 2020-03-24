import React from 'react';
import './App.css';

class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(() => console.log(this.state.count), 3000);
  }

  componentDidUpdate() {
    const count = this.state.count
    setTimeout(() => console.log(count + ' class'), 3000);
  }
  render() {
    return (
      <div>
        <p>Вы кликнули {this.state.count} раз(а) класс1</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}

function ExampleFunc() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => console.log(count + ' func'), 3000);
  });
  return (
    <div>
      <p>Вы кликнули {count} раз(а) функцию1</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
         </button>
    </div>
  );
}

class ExampleClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setTimeout(() => console.log(this.state.count), 3000);
  }

  componentDidUpdate() {
    setTimeout(() => console.log(this.state.count + ' class'), 3000);
  }
  render() {
    return (
      <div>
        <p>Вы кликнули {this.state.count} раз(а) класс2</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Нажми на меня иначе
          </button>
      </div>
    );
  }
}

function ExampleFunc2() {
  const [count, setCount] = React.useState(0);
  const mutableCount = React.useRef(0);

  React.useEffect(() => {
    setTimeout(() => console.log(mutableCount.current + ' func'), 3000);
  });
  const increment = () => {
    setCount(count + 1);
    mutableCount.current = count + 1;
  }
  return (
    <div>
      <p>Вы кликнули {count} раз(а) функцию2</p>
      <button onClick={increment}>
        Нажми на меня иначе
           </button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h2><ExampleClass /></h2>
      <h2><ExampleFunc /></h2>
      <h2><ExampleClass2 /></h2>
      <h2><ExampleFunc2 /></h2>
    </div>
  );
}

export default App;
