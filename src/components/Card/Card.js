import React from 'react';

const styles = {
  height: '200px',
  width: '150px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  margin: '10px'
};

const Card = ({ person }) => (
  <div style={{ display: 'inline-block' }}>
    <div style={styles}>
      <h1>{person.name}</h1>
    </div>
  </div>
);

export default Card;
