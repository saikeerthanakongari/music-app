import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Sidebar, TopPlay, MusicPlayer } from './components';
import Discover from './pages/Discover';
import SongDetails from './pages/SongDetails';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  
  // Theme State
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`relative flex ${darkMode ? 'bg-[#191624]' : 'bg-white'}`}>
      <Sidebar />
      
      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${darkMode ? 'bg-gradient-to-br from-black to-[#121286]' : 'bg-gradient-to-br from-gray-100 to-gray-300'}`}>
        
        {/* THEME TOGGLE BUTTON */}
        <div className="w-full flex justify-end px-6 pt-4">
            <button 
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 rounded-full font-bold text-sm bg-cyan-400 text-black hover:bg-cyan-300 transition"
            >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {/* Playback UI */}
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;