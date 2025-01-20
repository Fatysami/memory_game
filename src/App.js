import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import NavigationBar from './components/NavigationBar';
import GamePage from './pages/GamePage';
import HistoryPage from './pages/HistoryPage';
import './styles/App.css';

function App() {
  return (
    <GameProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
