import {PlaylistModel} from "./models/PlaylistModel.ts";
import {createContext} from "react";

interface PlaylistContextModel {
    playlists: PlaylistModel[],
    currentPlaylist: PlaylistModel | undefined
    setPlaylists: (playlists: PlaylistModel[]) => void
    setCurrentPlaylist: (playlist: PlaylistModel) => void
}

const PlaylistsContext = createContext<PlaylistContextModel>({
    playlists: [],
    currentPlaylist: undefined,
    setPlaylists: () => {},
    setCurrentPlaylist: () => {}
});

export default PlaylistsContext