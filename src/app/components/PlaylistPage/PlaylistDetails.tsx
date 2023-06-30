import React from 'react';

interface PlaylistDetailsProps {
  title: string;
  image: string;
  trackCount: number;
}

const PlaylistDetails: React.FC<PlaylistDetailsProps> = ({ title, image, trackCount }) => {
  return (
    <div className="bg-zinc-600 p-4 rounded-b-lg">
      <div className='flex'>
        <img className="w-1/4 h-1/4mb-4 rounded-lg" src='./src/assets/luv.jpg' alt={`${title} cover`} />
        <div className='w-full pt-2 px-4 space-y-44'>
          <div>
            <div className='pb-4'>
              <h2>Playlist</h2>
            </div>
            <h2 className="text-zinc-300 font-medium text-6xl">Titre</h2>
            <h2 className="text-zinc-300 font-medium text-2xl">Artiste</h2>
          </div>
          <div>
            <p className='text-zinc-400 font-medium'>{trackCount} morceaux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
