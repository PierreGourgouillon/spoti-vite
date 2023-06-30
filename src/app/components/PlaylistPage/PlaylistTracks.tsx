import React from 'react';

interface Track {
  id: string;
  title: string;
  artist: string;
}

interface PlaylistTracksProps {
  tracks: Track[];
}

const PlaylistTracks: React.FC<PlaylistTracksProps> = ({ tracks }) => {
  return (
    <div className="bg-zinc-700 p-4">
      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            className="bg-white rounded py-2 px-4 shadow mb-2"
          >
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistTracks;
