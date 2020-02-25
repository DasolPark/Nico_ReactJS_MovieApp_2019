import React from 'react';

class App extends React.Component {
  state = { number: 0 };

  add = () => {
    console.log('add');
  };

  sub = () => {
    console.log('minus');
  };

  render() {
    return (
      <div>
        <h1>The Number is {this.state.number}</h1>
        <button onClick={this.add}>plus</button>
        <button onClick={this.sub}>minus</button>
      </div>
    );
  }
}

export default App;
