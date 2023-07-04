import {useContext, useEffect, useState} from "react";
import TokenContext from "../context.tsx";
import PlaylistRepository from "../repositories/PlaylistRepository.ts";
import PlaylistService from "../services/PlaylistService.ts";
import {PlaylistModel} from "../models/PlaylistModel.ts";

export default function HomePage() {
    const { token, refreshToken } = useContext(TokenContext)
    const playlistRepository: PlaylistRepository = new PlaylistRepository(new PlaylistService())
    const [playlistState, setPlaylists] = useState<PlaylistModel[]>([])

    useEffect(() => {
        playlistRepository.getPlaylists(token)
            .then((playlists) => {
                setPlaylists(playlists)
            })
    })

    return(
        <div>
            <div>token: {token}</div>
            <div>refresh: {refreshToken}</div>
            {playlistState.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}