import React, {useContext} from 'react';
import PlaylistsContext from "../../PlaylistsContext.ts";

interface PlaylistDetailsProps {
  title: string;
  image: string;
  trackCount: number;
}

const PlaylistDetails: React.FC<PlaylistDetailsProps> = ({ title }) => {
  const { currentPlaylist } = useContext(PlaylistsContext)

  return (
    <div className="bg-zinc-600 p-4 rounded-b-lg max-h-min">
      <div className='flex'>
        <img className="max-w-xs max-h-fit rounded-lg" src={currentPlaylist?.images[0].url} alt={`${title} cover`} />
        <div className='w-full pt-2 px-4 space-y-44'>
          <div>
            <div className='pb-4'>
              <h2>{currentPlaylist?.owner.display_name}</h2>
            </div>
            <h2 className="text-zinc-300 font-medium text-6xl">{currentPlaylist?.name}</h2>
          </div>
          <div>
            <p className='text-zinc-400 font-medium'>{currentPlaylist?.tracks.total} morceaux</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistDetails