export default function WelcomePage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-10">
            <img src="./src/assets/spotify.png" className="w-40"/>
            <p className="text-white font-medium text-3xl">Choisissez une playlist sur votre gauche</p>
        </div>
    )
}