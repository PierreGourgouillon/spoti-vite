import React from 'react';
import CellPlaylistSidebar from './CellPlaylistSidebar';

interface Playlist {
  id: string;
  name: string;
}

interface PlaylistSidebarProps {
  playlists: Playlist[];
  onAddPlaylist: () => void;
}

const PlaylistSidebar = () => {
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
  return (
    <div className='flex'>
      <div className='w-72 h-screen bg-zinc-800 rounded-r-lg'>
        <div className='flex gap-x-4 mx-4 my-4 items-center pb-4'>
          <img
            src="./src/assets/spotify.png" alt=""
            className='cursor-pointer duration-500 w-10' />
          <h1 className='text-white origin-left font-medium text-2xl duration-200'>Spoti-Vite</h1>
        </div>
        <ul className=''>
          {Menus.map((menu, index) => (
            CellPlaylistSidebar(index, menu.title, menu.src)
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaylistSidebar;
