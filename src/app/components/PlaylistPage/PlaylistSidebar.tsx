import React from 'react';
import CellPlaylistSidebar from './CellPlaylistSidebar';
import ProfileComponent from './ProfileComponent';

interface Playlist {
  id: string;
  name: string;
}

interface PlaylistSidebarProps {
  playlists: Playlist[];
  onAddPlaylist: () => void;
}
const User ={ username: 'user1', src: './src/assets/profil.jpg' };

const List = [
  { title: 'Playlist Title1', src: 'Playlist Image1' },
  { title: 'Playlist Title2', src: 'Playlist Image2' },
  { title: 'Playlist Title4', src: 'Playlist Image4' },
];
let Menus = List.map((item) => {
  return {
    title: item.title,
    src: item.src
  };
});

const PlaylistSidebar = () => {
 
  return (
    <div className='flex'>
      <div className='w-72 h-screen bg-zinc-800 rounded-r-lg'>
        <div className='flex gap-x-4 mx-4 mt-4 items-center pb-4'>
          <img
            src="./src/assets/spotify.png" alt=""
            className='cursor-pointer duration-500 w-10' />
          <h1 className='text-white origin-left font-medium text-2xl '>Spoti-Vite</h1>
        </div>
        {ProfileComponent(User.username, User.src)}
        <div className='border-b-2 border-zinc-700 mb-4 mx-4'></div>
        <div className='rounded-lg bg-zinc-700 bg-opacity-40 pb-2'>
          <h2 className='
            text-zinc-500 text-lg font-semibold px-2 pt-1'>Bibliothèque</h2>
          <ul>
            {Menus.map((menu, index) => (
              CellPlaylistSidebar(index, menu.title, menu.src)
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSidebar;
