# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Create Components

1. `App` component - Main Container
2. `PlayerList` component - Fetches and displays a lsit of players.
3. `PlayerDetail` component - Shows details for a single player
4. `PlayerForm` component - Form to create a new player
5. `SearchBar` component - Search player by name
6. Utility functions: Get,Post,Delete

Implementing Features

1. Fetch and Display Players
- `useEffect` for fetching players data from component
- Map through players data to display players info in a list

2. Players Details
- Route to a detailed view when the "See Details" button is clicked
- Fetch player details using the players ID

3. Creating New Players
- Implement a form with controlled inputs for players creation
- Use the POST request to create a new player

4. Search Functionality
- Find a search bar to implement 

5. Deleting a Player
- Add Delete Button to players that have only been created by the individual user

Styling

 1. Use Boostrap library for styling

Routing
- use `react-router-dom` for navigating the list view and the detailed players


