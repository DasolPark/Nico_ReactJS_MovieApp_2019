import React from 'react';

function Something({ favFood, booooolean, aaarray }) {
  return (
    <div>
      Something
      <h1>{favFood}</h1>
      <h2>{booooolean}</h2>
      <h3>{aaarray}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Something
        favFood={'kimchi'}
        booooolean={true}
        aaarray={[1, 2, 3, 'Hello']}
      ></Something>
      <Something
        favFood={'pasta'}
        booooolean={false}
        aaarray={[4, 5, 6, 'Bye']}
      ></Something>
    </div>
  );
}

export default App;
