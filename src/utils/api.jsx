import axios from 'axios';


const API_BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402ftbetwebft';

export const fetchPlayers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players`);

    return response.data.data.players;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

export const fetchPlayerDetail = async (playerId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players/${playerId}`);
    return response.data.data.player;
  } catch (error) {
    console.error(`Error fetching player detail for ID ${playerId};`,error);
    return null;
  }
};

export const createPlayer = async (playerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/players`, playerData, {
      header: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating player:', error);
    throw error;
  }
};