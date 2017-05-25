import React from 'react';

const ListItem = ({ name, description, poster, price }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="thumbnail">
          <img src={poster} alt={name}/>
        </div>
      </div>
      <div className="col-md-8">
        <h3>{name}</h3>
        <p>{description}</p>
        <pre className="price-tag">
          <samp>
            {price}
          </samp>
        </pre>
      </div>
    </div>
  )
}

export default ListItem;
