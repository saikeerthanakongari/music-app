// src/store.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMusicStore = create(
  persist(
    (set) => ({
      // --- STATE (Data we want to store) ---
      currentSong: null,
      isPlaying: false,
      theme: 'dark', // Default to dark mode

      // --- ACTIONS (Functions to change the data) ---
      playPause: (status) => set({ isPlaying: status }),
      
      setActiveSong: (song) => set({ 
        currentSong: song, 
        isPlaying: true 
      }),

      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'dark' ? 'light' : 'dark' 
      })),
    }),
    {
      name: 'lyriks-storage', // This saves data to LocalStorage
    }
  )
);