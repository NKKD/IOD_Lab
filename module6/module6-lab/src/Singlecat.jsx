import React from 'react';

const SingleCat = ({ id, name, latinName, image }) => {
  return (
    <div key={id} className="cat">
      <h3>{name}</h3>
      <p>Latin Name: {latinName}</p>
      {image && <img src={image} alt={name} />}
    </div>
  );
};

export default SingleCat;
