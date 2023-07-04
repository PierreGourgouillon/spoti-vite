import React from 'react';
import PlaylistSidebar from './PlaylistSidebar';
import PlaylistDetails from './PlaylistDetails';
import PlaylistTracks from './PlaylistTracks';

// Exemple de données, à remplacer par les données provenant de votre API
const playlists = [
  { id: '1', name: 'Playlist 1' },
  { id: '2', name: 'Playlist 2' },
];

const tracks = [
  { id: '1', title: 'Track 1', artist: 'Artist 1' },
  { id: '2', title: 'Track 2', artist: 'Artist 2' },
  { id: '2', title: 'Track 2', artist: 'Artist 2' },
];

const PlaylistPage = () => {

  return (
    <div className="flex">
      <PlaylistSidebar/>
      <div className="bg-zinc-700 flex-grow">
        <PlaylistDetails
          title="Playlist 1"
          image="playlist-image-url"
          trackCount={tracks.length}
        />
        <PlaylistTracks tracks={tracks} />
      </div>
    </div>
  );
};

export default PlaylistPage;
