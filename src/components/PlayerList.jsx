import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../utils/api' ;


const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect (() => {
    const getPlayers = async () => {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    };
    getPlayers();
  }, [] );
  return (
    <div>
      {players.map(({ id, name }) =>(
        <div key={id}>
          <h2>{name}</h2>
          <Link to ={`/player/${id}`}>See Details</Link>
          </div>
      ))}
    </div>
  );
};

export default PlayerList;