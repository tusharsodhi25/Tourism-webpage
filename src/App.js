import React, { useState } from "react";
import Tours from "./components/Tours";
import data from './data';

const App = () => {
  const [tours, settours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    settours(newTours);
  };

  if(tours.length===0){
    return(
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={()=>settours(data)}>
            Refresh
          </button>
        </div>  
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;

