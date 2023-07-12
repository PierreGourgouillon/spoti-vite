import PlaylistService from "../services/PlaylistService.ts";
import {PlaylistModel} from "../models/PlaylistModel.ts";

export default class PlaylistRepository {
    private playlistService: PlaylistService

    public constructor(playlistService: PlaylistService) {
        this.playlistService = playlistService;
    }

    getPlaylists = async (token: string): Promise<PlaylistModel[]> => {
        const response = await this.playlistService.getPlaylists(token)

        return response.data.items as PlaylistModel[]
    }

    getSongs = async (token: string, href: string): Promise<SpotifyCurrentTracks[]> => {
        const response = await this.playlistService.getSongs(token, href)

        return response.data.items as SpotifyCurrentTracks[]
    }

    getMe = async (token: string): Promise<SpotifyUser> => {
        const response = await this.playlistService.getMe(token)
        console.log("ntm")
        console.log(response.data as SpotifyUser)
        return response.data as SpotifyUser
    }
}