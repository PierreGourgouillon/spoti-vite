import {useContext, useEffect, useState} from 'react';
import PlaylistRepository from "../../repositories/PlaylistRepository.ts";
import PlaylistService from "../../services/PlaylistService.ts";
import TokenContext from "../../context.tsx";
import PlaylistsContext from "../../PlaylistsContext.ts";
import Player from "../Player.tsx";

const PlaylistTracks = () => {
    const { token } = useContext(TokenContext)
    const { currentPlaylist } = useContext(PlaylistsContext)
    const repository = new PlaylistRepository(new PlaylistService())
    const [tracks, setTracks] = useState<SpotifyCurrentTracks[]>()
    const [isLoading, setLoading] = useState<boolean>(true)
    const [currentTrack, setCurrentTrack] = useState<SpotifyCurrentTracks | undefined>()

    useEffect(() => {
        if (isLoading) {
            if (currentPlaylist != null) {
                repository.getSongs(token, currentPlaylist.tracks.href)
                    .then((response) => {
                        setTracks(response)
                        setLoading(false)
                    })
            }
        }
    })
  return (
    <div className="bg-zinc-700 p-4">
      <ul>
          {tracks?.map((track, index) => (
              <li key={index} className="flex py-1 cursor-pointer hover:bg-zinc-600" onClick={() => {
                  setCurrentTrack(track)
              }}>
                  <div className="flex w-full items-center text-zinc-400">
                      <div className="flex w-1/3 items-center">
                          <p className="px-6">{index + 1}</p>
                          <img className="w-16 h-16" src={track.track.album.images[0].url}/>
                          <div className="flex-col pl-4">
                              <p className="font-semibold">{track.track.name}</p>
                              <p>{track.track.artists.map(artist => artist.name).join(', ')}</p>
                          </div>
                      </div>
                      <div className="flex justify-center w-1/3">
                          <p className="">{track.track.album.name}</p>
                      </div>
                      <div className="flex w-1/3 justify-end pr-3">
                          <p>{track.track.duration_ms}</p>
                      </div>
                  </div>
              </li>
          ))}
      </ul>

        { isLoading ? <div></div> : <div className="fixed bottom-0 w-4/6"><Player trackUri={currentTrack?.track.uri ?? ""}/></div>}

    </div>
  );
};

export default PlaylistTracks;
