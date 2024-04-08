import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerDetail from './components/PlayerDetail';
import PlayerForm from './components/PlayerForm';

const App = () => (
  <Router>
    <div>
      <h1>Puppy Bowl Roster</h1>
      <Routes>
        <Route path="/" element={<PlayerList/>}/>
        <Route path="/detail" element={<PlayerDetail/>}/>
        <Route path="/new" element={<PlayerForm/>}/>
      </Routes>
    </div>
  </Router>
);

export default App;