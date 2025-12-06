import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { mockSongs } from '../assets/constants';
import { setActiveSong, playPause } from '../redux/playerSlice';
import { Loader, Error } from '../components';

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Find the song from mock data based on ID (key)
  const songData = mockSongs.find((song) => song.key === songid);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song: songData, data: mockSongs, i: 0 }));
    dispatch(playPause(true));
  };

  if (!songData) return <Loader title="Searching song details..." />;

  return (
    <div className="flex flex-col">
      <div className="relative w-full flex flex-col">
        <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
        <div className="absolute inset-0 flex items-center">
          <img
            alt="art"
            src={songData?.images?.coverart}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />
          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">{songData?.title}</p>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            <p className="text-base text-gray-400 mt-2">{songData?.genres?.primary}</p>
          </div>
        </div>
      </div>

      <div className="mb-10 m-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
            <p className="text-gray-400 text-base my-1">Sorry, no lyrics found in this mock version!</p>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;