import Image from "next/image";
import React, { useState } from "react";
import playIcon from '../public/images/play-icon.png';
import useStore from "../store/useStore";

function MainWindowSectionItem(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [setQueue] = useStore(

        (state) => [state.setQueue]
    )
    function handleClick(){
        console.log(props.detail.tracks.items)
        setQueue(props.detail.tracks.items);
    }

    return (
        <div onMouseEnter={async () => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)} className={`flex overflow-hidden p-4 rounded flex-col bg-neutral-800/30 hover:bg-neutral-700/40`}>
            <div className="relative w-full h-2/3">
                <img className="rounded w-full h-full" src={props.imgSrc} alt="" />
                {
                    isFocused && <div onClick={handleClick} className={`absolute bottom-2 right-2 bg-green-400 rounded-full flex w-12 h-12 shadow-lg shadow-neutral-800 m-auto hover:scale-105`}>
                    <Image className="m-auto pl-1" src={playIcon} width={26} alt="" />
                </div>
                }
            </div>
            <p className={`text-white whitespace-nowrap overflow-hidden  mt-3 mb-2 font-bold hover:underline`}>{props.name}</p>
            <p className={`text-neutral-400 text-sm overflow-hidden  font-bold hover:underline`}>{props.artists}</p>
        </div>
    );
}

export default MainWindowSectionItem;