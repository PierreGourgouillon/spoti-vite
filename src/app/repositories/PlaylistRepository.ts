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
}