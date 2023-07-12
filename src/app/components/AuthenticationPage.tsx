
export default function AuthenticationPage() {
    return(
        <div className="flex w-screen h-screen bg-zinc-700 justify-center items-center">
            <div className="py-4 px-8 rounded-lg bg-green-600 text-white font-semibold text-lg cursor-pointer">
                <a href="https://accounts.spotify.com/authorize?client_id=fef1daa5363a476c8a53e5094ccbd8e6&response_type=code&redirect_uri=http://localhost:5173/callback&scope=playlist-read-private%20streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state">Connectez-vous</a>
            </div>
        </div>
    )
}