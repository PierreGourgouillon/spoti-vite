export default function ProfileComponent(username: string, imgSrc: string) {
    return (
        <div className='mb-4'>
          <h2 className='text-zinc-500 text-lg font-semibold px-2 pt-1'>Profil</h2>
            <div className='flex gap-x-2 mx-2 mt-2 items-center'>
              <img className='rounded-full w-14' src={`${imgSrc}`} alt="profil" />
              <h1 className='origin-left text-zinc-300 text-lg'>{username}</h1>
            </div>
        </div>
    )
}