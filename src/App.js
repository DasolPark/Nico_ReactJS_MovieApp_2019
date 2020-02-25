import React from 'react';
import PropTypes from 'prop-types';

const fav = [
  {
    id: 1,
    name: 'kimchi',
    img:
      'https://images.unsplash.com/photo-1561505184-ba7ef239577b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    rating: 3.3
  },
  {
    id: 2,
    name: 'Meat',
    img:
      'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    rating: 4.5
  },
  {
    id: 3,
    name: 'pasta',
    img:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1403&q=80',
    rating: 2.3
  }
];

function Food({ name, img, rating }) {
  return (
    <div>
      <h1>I like {name}😍</h1>
      <h5>rating: {rating}/5.0</h5>
      <img
        src={img}
        alt={name}
        style={{ width: '250px', height: '250px' }}
      ></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {fav.map(({ name, img, rating, id }) => (
        <Food name={name} img={img} rating={rating} key={id}></Food>
      ))}
    </div>
  );
}

export default App;
