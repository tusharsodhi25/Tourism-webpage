import React from 'react';
import Card from './Card';

const Tours = ({ tours, removeTour }) => {


  return (
    <div className='container'>
        <div>
          <h2 className='title'>Plan with Tushar</h2>
        </div>
        <div className='cards'>
          {Array.isArray(tours) ? (
            tours.map((tour) => {
              return <Card key={tour.id} {...tour} removeTour={removeTour} />;
            })
          ) : (
            <p>No tours available</p>
          )}
        </div>
    </div>
  );
};

export default Tours;
