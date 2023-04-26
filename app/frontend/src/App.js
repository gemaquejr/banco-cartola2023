import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Team from './pages/Team';
import Coach from './pages/Coach';
import Match from './pages/Match';
import Player from './pages/Player';
import Round from './pages/Round';

import './Reset.css'

function App() {
  return (
    <Routes>
      <Route path="/coaches" element={ <Coach /> } />
      <Route path="/matches" element={ <Match /> } />
      <Route path="/players" element={ <Player /> } />
      <Route path="/rounds" element={ <Round /> } />
      <Route path="/teams" element={ <Team /> } />
      <Route exact path="/" element={ <Navigate to="/matches" /> } />
    </Routes>
  );
}

export default App;
