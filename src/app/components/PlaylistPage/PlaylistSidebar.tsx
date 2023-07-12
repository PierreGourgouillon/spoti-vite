import CellPlaylistSidebar from './CellPlaylistSidebar';
import ProfileComponent from './ProfileComponent';
import {PlaylistModel} from "../../models/PlaylistModel.ts";
import {useContext, useEffect, useState} from "react";
import PlaylistsContext from "../../PlaylistsContext.ts";
import PlaylistRepository from "../../repositories/PlaylistRepository.ts";
import PlaylistService from "../../services/PlaylistService.ts";
import TokenContext from "../../context.tsx";

const PlaylistSidebar = ({ playlists }: { playlists: PlaylistModel[] }) => {

  const { token } = useContext(TokenContext)
  const repository = new PlaylistRepository(new PlaylistService())
  const { setCurrentPlaylist } = useContext(PlaylistsContext)
  const [currentUser, setCurrentUser] = useState<SpotifyUser | undefined>()

  useEffect(() => {
    if (currentUser == null) {
      repository.getMe(token)
          .then((response) => {
            setCurrentUser(response)
          })
    }
  })

  return (
    <div className='flex'>
      <div className='w-72 h-full bg-zinc-800 rounded-r-lg'>
        <div className='flex gap-x-4 mx-4 mt-4 items-center pb-4'>
          <img
            src="./src/assets/spotify.png" alt=""
            className='cursor-pointer duration-500 w-10' />
          <h1 className='text-white origin-left font-medium text-2xl '>Spoti-Vite</h1>
        </div>
        {ProfileComponent(currentUser?.display_name ?? "", currentUser?.images.length == 0 ? "./src/assets/user.circle.svg" : currentUser?.images[0].url)}
        <div className='border-b-2 border-zinc-700 mb-4 mx-4'></div>
        <div className='rounded-lg bg-zinc-700 bg-opacity-40 pb-2'>
          <h2 className='
            text-zinc-500 text-lg font-semibold px-2 pt-1'>Bibliothèque</h2>
          <ul>
            {playlists.map((playlist, index) => (
              CellPlaylistSidebar(index, playlist.name, playlist.images[0].url, () => {
                setCurrentPlaylist(playlists[index])
              })
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSidebar;
