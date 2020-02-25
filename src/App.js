import React from 'react';

function Food({ name, img }) {
  return (
    <div>
      <h1>I like {name}😍</h1>
      <img
        src={img}
        alt={name}
        style={{ width: '250px', height: '250px' }}
      ></img>
    </div>
  );
}

const fav = [
  {
    id: 1,
    name: 'kimchi',
    img:
      'https://images.unsplash.com/photo-1561505184-ba7ef239577b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 2,
    name: 'Meat',
    img:
      'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
  },
  {
    id: 3,
    name: 'pasta',
    img:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1403&q=80'
  }
];

function getRenderFood(food) {
  // console.log(food);
  return <Food name={food.name} img={food.img} key={food.id}></Food>;
}

function App() {
  // console.log(fav.map(getRenderFood));
  return <div>{fav.map(getRenderFood)}</div>;
}

export default App;
