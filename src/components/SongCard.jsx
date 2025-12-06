import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/playerSlice';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-white/10">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          {activeSong?.title === song.title && isPlaying ? (
            <FaPauseCircle size={35} className="text-gray-300" onClick={handlePauseClick} />
          ) : (
            <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlayClick} />
          )}
        </div>
        <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">{song.title}</p>
        <p className="text-sm truncate text-gray-300 mt-1">{song.subtitle}</p>
      </div>
    </div>
  );
};

export default SongCard;