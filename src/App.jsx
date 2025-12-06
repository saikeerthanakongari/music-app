import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// 1. Import the Store
import { useMusicStore } from './store';

// 2. Import Components
import { Sidebar, MusicPlayer, TopPlay } from './components';

// 3. Import Pages (WE COMMENTED OUT THE MISSING ONES TO FIX THE CRASH)
import Discover from './pages/Discover';
// import AroundYou from './pages/AroundYou';      <-- File likely missing
// import TopArtists from './pages/TopArtists';    <-- File likely missing
// import ArtistDetails from './pages/ArtistDetails'; <-- File likely missing
// import SongDetails from './pages/SongDetails';  <-- File likely missing
// import Search from './pages/Search';            <-- File likely missing
// import TopCharts from './pages/TopCharts';      <-- File likely missing

const App = () => {
  const { theme, toggleTheme } = useMusicStore();

  return (
    <div className={`relative flex ${theme === 'dark' ? 'bg-gradient-to-br from-black to-[#121286]' : 'bg-white text-gray-800'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-transparent">
        
        {/* THEME SWITCH BUTTON */}
        <div className="absolute top-4 right-20 z-10">
            <button 
              onClick={toggleTheme} 
              className="px-4 py-2 rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>

        <TopPlay />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              {/* WE ONLY KEEP DISCOVER ACTIVE FOR NOW */}
              <Route path="/" element={<Discover />} />
              
              {/* Commented out routes until you create these files
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              */}
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {/* MUSIC PLAYER */}
      <div className="absolute h-28 bottom-0 left-0 right-0 animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;