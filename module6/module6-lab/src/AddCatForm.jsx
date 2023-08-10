import React, { useState } from 'react';

const AddCatForm = ({ onAddCat }) => {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new cat object with the form data
    const newCat = {
      name,
      latinName,
      image,
    };
    // Pass the newCat data to the parent component (BigCats) using the onAddCat function
    onAddCat(newCat);
    // Clear the form fields
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="latinName">Latin Name:</label>
        <input type="text" id="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
