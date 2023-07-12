import axios from "axios";

export default class SongService {
    getCurrentUserPlaylist = async function (token: string) {
        const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        console.log(response)
    }
}