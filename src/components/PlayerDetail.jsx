import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayers, fetchPlayerDetail} from '../utils/api';

const PlayerDetail = () => {
  const [player, setPlayer] = useState (null);
  const {id} = useParams();

  useEffect(() => {
    const getPlayerDetails = async () => {
      const playerData = await fetchPlayerDetail(id);
      setPlayer(playerData);
    };
    getPlayerDetails();
  }, [id] );

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <img src={player.image.Url} alt={player.name} />
    </div>
  );
};

export default PlayerDetail;