import React from 'react';
import SingleCat from './Singlecat';
import AddCatForm from './AddCatForm'
import { useState } from "react";

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow_leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

const BigCats = () => {
  const [catList, setCatList] = useState(cats);
  const [filtered, setFiltered] = useState(false);

  const handleAlphabeticalSort = () => {
    const sortedCats = [...catList].sort();
    setCatList(sortedCats);
  };

  const handleReverseList = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
  };

  const handleFilterPantheraFamily = () => {
    const pantheraCats = cats.filter(cat => cat.latinName.includes('Panthera'));
    setCatList(pantheraCats);
    setFiltered(true);
  };

  const handleResetList = () => {
    setCatList(cats);
    setFiltered(false);
  };

  const handleAddCat = (newCat) => {
    // Add cat to the catList array
    setCatList([...catList, newCat]);
    // Reset the form fields and show the full list
    setFiltered(false);
  };

  const handleDeleteCat = (id) => {
    // Remove the cat with the given id from the catList array
    const updatedCatList = catList.filter(cat => cat.id !== id);
    setCatList(updatedCatList);
  };

  return (
    <div className="big-cats">
      <h2>Big Cats</h2>
      <div className="buttons">
        <button onClick={handleAlphabeticalSort}>Sort A-Z</button>
        <button onClick={handleReverseList}>Reverse List</button>
        <button onClick={handleFilterPantheraFamily}>Filter Panthera</button>
        <button onClick={handleResetList}>Reset List</button>
      </div>
      <div className="cat-list">
        {catList.map(cat => (
          <div key={cat.id} className="cat-container">
            <SingleCat {...cat} />
            <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
          </div>
        ))}
      </div>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
};

export default BigCats;
