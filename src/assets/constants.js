// --- constants.js ---

// 1. GENRES
export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

// 2. SONGS
export const songs = [
  {
    title: 'Shape of You',
    subtitle: 'Ed Sheeran',
    key: '1',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29.png',
      background: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29.png'
    }
  },
  {
    title: 'Blinding Lights',
    subtitle: 'The Weeknd',
    key: '2',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
      background: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png'
    }
  },
  {
    title: 'Levitating',
    subtitle: 'Dua Lipa',
    key: '3',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/2/26/Dua_Lipa_-_Levitating_%28Official_Single_Cover%29.png', 
      background: 'https://upload.wikimedia.org/wikipedia/en/2/26/Dua_Lipa_-_Levitating_%28Official_Single_Cover%29.png'
    }
  },
  {
    title: 'STAY',
    subtitle: 'Kid LAROI & Bieber',
    key: '4',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png',
      background: 'https://upload.wikimedia.org/wikipedia/en/0/0c/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png'
    }
  },
  {
    title: 'good 4 u',
    subtitle: 'Olivia Rodrigo',
    key: '5',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Good_4_U_by_Olivia_Rodrigo_cover.png',
      background: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Good_4_U_by_Olivia_Rodrigo_cover.png'
    }
  },
  {
    title: 'Montero',
    subtitle: 'Lil Nas X',
    key: '6',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Lil_Nas_X_-_Montero_%28Call_Me_by_Your_Name%29.png',
      background: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Lil_Nas_X_-_Montero_%28Call_Me_by_Your_Name%29.png'
    }
  },
  {
    title: 'Kiss Me More',
    subtitle: 'Doja Cat',
    key: '7',
    images: {
      coverart: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Doja_Cat_-_Kiss_Me_More.png',
      background: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Doja_Cat_-_Kiss_Me_More.png'
    }
  }
];

// 3. LINKS
export const links = [
  { name: 'Discover', to: '/', icon: 'HiOutlineHome' },
  { name: 'Around You', to: '/around-you', icon: 'HiOutlinePhotograph' },
  { name: 'Top Artists', to: '/top-artists', icon: 'HiOutlineUserGroup' },
  { name: 'Top Charts', to: '/top-charts', icon: 'HiOutlineHashtag' },
];

// 4. THIS IS THE FIX: We export 'songs' as 'mockSongs' too
export const mockSongs = songs;