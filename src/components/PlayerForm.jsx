import React, {useState} from 'react';
import {createPlayer} from '../utils/api';

const PlayerForm = () => {
  const [name, setName] = useState ('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPlayer({name, breed});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="breed">Breed</label>
        <input id ="breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </div>
      <button type="submit">Create Player</button>
    </form>
  );
};

export default PlayerForm;