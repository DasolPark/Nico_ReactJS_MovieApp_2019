import React from 'react';

class App extends React.Component {
  state = { number: 0 };

  add = () => {
    this.setState(current => ({
      number: current.number + 1 // Best Case
    }));
  };

  sub = () => {
    this.setState({ number: this.state.number - 1 }); // Bad Case
  };

  render() {
    return (
      <div>
        <h1>The Number is {this.state.number}</h1>
        <button onClick={this.add}>
          <span role="img" aria-label="plus">
            ➕
          </span>
        </button>
        <button onClick={this.sub}>
          <span role="img" aria-label="minus">
            ➖
          </span>
        </button>
      </div>
    );
  }
}

export default App;
