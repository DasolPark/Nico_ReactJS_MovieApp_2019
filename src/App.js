import React from 'react';

function Something({ name }) {
  return (
    <div>
      <h1>I like {name}</h1>
    </div>
  );
}

const fav = [
  {
    name: 'kimchi'
  },
  {
    name: 'Meat'
  },
  {
    name: 'pasta'
  }
];

function App() {
  return (
    <div>
      {fav.map(food => (
        <Something name={food.name}></Something>
      ))}
    </div>
  );
}

export default App;
