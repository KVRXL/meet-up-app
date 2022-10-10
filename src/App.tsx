import React from 'react';
import { Routes, Route } from 'react-router-dom'
import  AllMeetups  from './pages/AllMeetups';

import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';




const App: React.FC = () => {
  return (
    <div>
    <MainNavigation />

    <Routes>
      <Route path="/" element={
        <AllMeetups />
      } />
      
      <Route path="/favorites" element={
        <Favorites />
      } />
    </Routes>
    </div>
  );
}

export default App;
