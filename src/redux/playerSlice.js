import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    selectGenre: (state, action) => {
      state.genreListId = action.payload;
    }
  },
});

export const { setActiveSong, playPause, selectGenre } = playerSlice.actions;
export default playerSlice.reducer;