import React, { useState } from 'react';

import PlaylistPage from './components/PlaylistPage/PlaylistPage';

function App() {
  return (
    <div className="App">
      <PlaylistPage />
    </div>
  );
}

/*
type Track = {
  id: number;
  title: string;
  artist: string;
  audioUrl: string;
};

const tracks: Track[] = [
  // Ajoutez vos chansons ici avec leurs informations respectives
  // { id: 1, title: 'Titre', artist: 'Artiste', audioUrl: 'URL_du_fichier_audio' },
  { id: 1, title: 'Titre', artist: 'Artiste', audioUrl: 'URL_du_fichier_audio' },
  { id: 2, title: 'gvyui', artist: 'erty', audioUrl: 'URL_du_fichier_audio' },
];

const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const audioUrl = URL.createObjectURL(file);
      const newTrack: Track = {
        id: Date.now(),
        title: file.name,
        artist: 'Inconnu',
        audioUrl,
      };
      setCurrentTrack(newTrack);
    }
  };

  return (
    <div className="App">
      <h1>Simple Music App</h1>
      <input type="file" accept="audio/*" onChange={handleChange} />
      <div className="track-list">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`track-item ${currentTrack?.id === track.id ? 'active' : ''}`}
            onClick={() => setCurrentTrack(track)}
          >
            <div>{track.title}</div>
            <div>{track.artist}</div>
          </div>
        ))}
      </div>
      {currentTrack && (
        <div className="audio-player">
          <h2>{currentTrack.title}</h2>
          <h3>{currentTrack.artist}</h3>
          <audio controls>
            <source src={currentTrack.audioUrl} />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
        </div>
      )}
    </div>
  );
};
*/
export default App;