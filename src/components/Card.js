import React, { useState } from 'react';

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setreadmore] = useState(false);

  
  
  const description = readmore? info : `${info.substring(0, 200)}....`;

  const readmorehandler = () => {
    setreadmore(!readmore);
  };

  return (
    <div className='card'>
        <img src={image} alt="" className='image' />
        <div className='tour-info'>
            <div className='tour-details'>
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>

            <div className='desc'>
                {readmore ? info : description}
                <span className='read-more' onClick={readmorehandler}>
                    {readmore ? 'Show less' : 'Read more'}
                </span>
            </div>
        </div>

        <button className='btn-red' onClick={() => removeTour(id)}>
            Not Interested
        </button>
    </div>
  );
};

export default Card;

