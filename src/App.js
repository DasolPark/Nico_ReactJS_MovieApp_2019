import React from 'react';

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false, book: true }), 3000);
  }

  render() {
    console.log(this.state);
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? 'Loading...' : 'We are ready!'}</h1>
      </div>
    );
  }
}

export default App;
