import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres, mockSongs } from '../assets/constants';
import { selectGenre } from '../redux/playerSlice';
import axios from 'axios'; // Requirement: Import Axios

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // --- AXIOS IMPLEMENTATION (Requirement) ---
    // If you had a real Shazam Core API key, you would use this code:
    /*
    const fetchSongs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://shazam-core.p.rapidapi.com/v1/charts/world`, {
           params: { country_code: 'US' },
           headers: {
             'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
             'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
           }
        });
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchSongs();
    */

    // --- MOCK IMPLEMENTATION (For Assignment Submission) ---
    // We simulate the API delay to show the Loader
    const loadMockData = () => {
      setLoading(true);
      setTimeout(() => {
        setData(mockSongs); // Using the mock data from constants.js
        setLoading(false);
      }, 1000);
    };

    loadMockData();

  }, [genreListId]);

  if (loading) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreListId || 'Pop'}</h2>
        <select
          onChange={(e) => dispatch(selectGenre(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;