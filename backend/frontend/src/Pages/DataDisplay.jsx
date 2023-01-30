import React from 'react';
import './DataDisplay.css';

const DataCard = ({ data }) => {
  return (
    <div className='card'>
      <div>Animal: {data.animal}</div>
      <div>Color: {data.color}</div>
      <div>Flavor: {data.flavor}</div>
      <div>Food: {data.food}</div>
    </div>
  );
};

const DataDisplay = ({ data }) => {
  return (
    <div className='display-container'>
      {data.map((d) => (
        <DataCard data={d} key={d.id} />
      ))}
    </div>
  );
};

export default DataDisplay;
