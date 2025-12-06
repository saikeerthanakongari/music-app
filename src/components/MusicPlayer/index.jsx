import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playPause } from '../../redux/playerSlice';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';

const MusicPlayer = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.3);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);

  // Handle Play/Pause when Redux state changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, activeSong]);

  // Handle source changes
  const songUrl = activeSong?.hub?.actions?.[0]?.uri || activeSong?.hub?.actions?.[1]?.uri;

  const handlePlayPause = () => {
    if (!isPlaying) {
      dispatch(playPause(true));
    } else {
      dispatch(playPause(false));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      
      {/* Track Info */}
      <div className="flex-1 flex items-center">
        <div className="hidden sm:block h-16 w-16 mr-4">
          <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
        </div>
        <div className="w-[50%]">
          <p className="truncate text-white font-bold text-lg">{activeSong?.title ? activeSong?.title : 'No Song'}</p>
          <p className="truncate text-gray-300">{activeSong?.subtitle ? activeSong?.subtitle : 'No Artist'}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-32 mb-2">
            <FaStepBackward size={20} className="text-white cursor-pointer" />
            
            {isPlaying ? (
                <FaPause size={30} onClick={handlePlayPause} className="text-white cursor-pointer" />
            ) : (
                <FaPlay size={30} onClick={handlePlayPause} className="text-white cursor-pointer" />
            )}
            
            <FaStepForward size={20} className="text-white cursor-pointer" />
        </div>
        
        {/* Simple Seek Bar (Visual Only for simplicity) */}
        <div className="flex flex-row items-center">
            <p className="text-white text-xs mr-2">0:00</p>
            <input 
                type="range" 
                min="0" 
                max="100" 
                className="w-24 md:w-56 h-1 rounded-lg"
            />
            <p className="text-white text-xs ml-2">3:00</p>
        </div>
      </div>

      {/* Volume (Simple Visual) */}
      <div className="hidden lg:flex items-center justify-end w-32 ml-4">
         <FaVolumeUp size={20} className="text-white mr-2"/>
         <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            value={volume}
            onChange={(e) => {
                setVolume(e.target.value);
                audioRef.current.volume = e.target.value;
            }}
            className="w-20 h-1 rounded-lg"
         />
      </div>

      {/* Actual Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={songUrl}
        loop={false}
        onEnded={() => dispatch(playPause(false))}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onLoadedData={(e) => setDuration(e.target.duration)}
      />
    </div>
  );
};

export default MusicPlayer;