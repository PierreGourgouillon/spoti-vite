
export default function CellPlaylistSidebar(index: number, title: string, imgSrc: string, onClick: () => void) {

    return (
        <li key={index} className='
            text-zinc-300 text-sm flex py-2 px-4 border-2 items-center gap-x-4
            cursor-pointer hover:bg-zinc-600 rounded-md mt-2' onClick={onClick}>
                <img className="w-10" src={`${imgSrc}`} alt=""/>
                <span>{title}</span>
      </li>
    )
}