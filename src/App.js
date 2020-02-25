import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  state = { number: 0 };

  add = () => {
    this.setState(current => ({ number: current.number + 1 }));
  };

  sub = () => {
    this.setState(current => ({ number: current.number - 1 }));
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
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
