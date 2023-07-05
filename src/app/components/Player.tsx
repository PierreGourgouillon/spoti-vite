import {useState, useEffect, useContext} from "react"

// @ts-ignore
import SpotifyPlayer from "react-spotify-web-playback"
import TokenContext from "../context.tsx";

const Player = ({ trackUri }: { trackUri: string }) => {
    const [play, setPlay] = useState(false)
    const { token } = useContext(TokenContext)

    useEffect(() => {
        setPlay(true)
    }, [trackUri])

    if (!token) return null
    return (
        <SpotifyPlayer
            token={token}
            showSaveIcon
            // @ts-ignore
            callback={state => !state.isPlaying && setPlay(false)}
            play={play}
            uris={trackUri ? trackUri : []}
            styles={{
                activeColor: "#fff",
                bgColor: "#333",
                color: "#fff",
                loaderColor: "#fff",
                sliderColor: "#1cb954",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
                height: "55px",
            }}
        />
    )
}

export default Player