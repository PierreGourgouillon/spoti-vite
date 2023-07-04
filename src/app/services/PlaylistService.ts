import axios from "axios";

export default class PlaylistService {
    getPlaylists = async function (token: string) {
        return await axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}