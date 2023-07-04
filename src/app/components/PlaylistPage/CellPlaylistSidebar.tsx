export default function CellPlaylistSidebar(index: number, title: string, imgSrc: string) {
    return (
        <li key={index} className='
            text-zinc-300 text-sm flex-col py-2 px-4 
            cursor-pointer hover:bg-zinc-600 rounded-md mt-2'>
                <img src={`${imgSrc}`} alt="" />
                <span>{title}</span>
      </li>
    )
}