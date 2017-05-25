import React from 'react';

const GridItem = ({ name, description, poster, price }) => {
  return (
    <div className="thumbnail grid-product">
      <img src={poster} alt={name}/>
      <div className="caption">
        <h3>{name}</h3>
        <p>{description}</p>
        <pre>
          <samp>
            {price}
          </samp>
        </pre>
      </div>
    </div>
  )
}

export default GridItem;
