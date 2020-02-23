import React from 'react';
import './App.css';
import Player from './Player/Player'

function App() {
  //adding players
  
  return (
    <div className="App">
      <h1 className="appTitle">스컬킹 점수표</h1>
      <div className="ScoreBoard">
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
    </div>
  );
}

export default App;