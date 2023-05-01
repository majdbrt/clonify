import React from "react";
import playIcon from '../public/images/play-icon';

function MainWindowSectionItem(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div onMouseEnter={async () => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)} className={`flex p-3 rounded flex-col`}>
            <div className="relative w-full h-3/4">
                <img className="rounded w-full h-full" src={props.imgSrc} alt="" />
                isFocused && <div className={`absolute bottom-2 right-2 bg-green-400 rounded-full flex w-12 h-12 shadow-lg shadow-neutral-800 m-auto hover:scale-105`}>
                    <NextImage className="m-auto pl-1" src={playIcon} width={26} alt="" />
                </div>
            </div>
            <SongTitle className="my-4" text={props.songTitle} />
            <p className={`text-neutral-400 font-bold hover:underline`}>{props.songArtists}</p>
        </div>
    );
}