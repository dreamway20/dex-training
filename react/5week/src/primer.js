import React from 'react';
import ReactDOM from "react-dom";

function ProfilePageFunction(props) {
    const showMessage = () => {
      alert('Followed ' + props.user);
    };
  
    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };
  
    return (
      <button onClick={handleClick}>Follow</button>
    );
  }

  class ProfilePageClass extends React.Component {
    showMessage = () => {
      alert('Followed ' + this.props.user);
    };
  
    handleClick = () => {
      setTimeout(this.showMessage, 3000);
    };
  
    render() {
      return <button onClick={this.handleClick}>Follow</button>;
    }
  }
class App extends React.Component {
  state = {
    user: 'Dan',
  };
  render() {
    return (
      <>
        <label>
          <b>Choose profile to view: </b>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunction user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClass user={this.state.user} />
          <b> (class)</b>
        </p>
        <p>
          Can you spot the difference in the behavior?
        </p>
      </>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;