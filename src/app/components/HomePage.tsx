import { useContext, useEffect, useState} from "react";
import PlaylistRepository from "../repositories/PlaylistRepository.ts";
import PlaylistService from "../services/PlaylistService.ts";
import { PlaylistModel } from "../models/PlaylistModel.ts";
import PlaylistSidebar from "./PlaylistPage/PlaylistSidebar.tsx";
import PlaylistDetails from "./PlaylistPage/PlaylistDetails.tsx";
import PlaylistsContext from "../PlaylistsContext.ts";
import TokenContext from "../context.tsx";
import PlaylistTracks from "./PlaylistPage/PlaylistTracks.tsx";

export default function HomePage() {
    const { token } = useContext(TokenContext)
    const playlistRepository: PlaylistRepository = new PlaylistRepository(new PlaylistService())
    const [playlists, setPlaylists] = useState<PlaylistModel[]>([])
    const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistModel | undefined>(undefined)
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isLoading) {
            playlistRepository.getPlaylists(token)
                .then((response) => {
                    setLoading(false)
                    setPlaylists(response)
                    console.log(response)
                    console.log(token)
                })
        }
    })

    return(
        <PlaylistsContext.Provider value={{ playlists: playlists, setPlaylists: setPlaylists, currentPlaylist: currentPlaylist, setCurrentPlaylist: setCurrentPlaylist }}>
            <div className="flex">
                <PlaylistSidebar playlists={playlists}/>
                <div className="bg-zinc-700 flex-grow">
                    <PlaylistDetails
                        title="Playlist 1"
                        image="playlist-image-url"
                        trackCount={0}
                    />
                    <PlaylistTracks/>
                </div>
            </div>
        </PlaylistsContext.Provider>
    )
}

/*
        <div>
            <div>token: {token}</div>
            <div>refresh: {refreshToken}</div>
            {playlistState.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
 */