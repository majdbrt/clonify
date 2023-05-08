import React, { useState } from "react";
import loveIconGreen from '../public/images/love-icon-green.png';
import loveIconWhite from '../public/images/love-icon-white.png';
import pipIcon from '../public/images/pip-icon.png';
import Image from "next/image";
function PlayerLeftContainer(props){
    const song = props.song;
    const [liked, setLiked] = useState(false);
    return(
        <div className={`flex ${!song ? 'w-44':''}  h-14 my-auto justify-between`}>
                <div className="bg-zinc-700 rounded w-14 h-full my-auto" >
                  { song && <img src={song?.album?.images?.[0].url} className="rounded h-full w-full" alt=""/>}
                </div>
                <div className="flex flex-col mx-4  rounded  h-full my-auto" >
                    <p className={`text-white  scale-y-90 mt-auto text-sm`}>{song?.name ? song?.name : "-"}</p>
                    <p className="text-neutral-400 scale-y-90 mb-auto text-xs">{song?.artists?.[0].name ? song?.artists?.[0].name : '-'}</p>
                </div>
                <div className="flex  rounded justify-between h-full my-auto" >
                    {
                        liked ?
                            <Image onClick={()=>{
                                liked? setLiked(false) : setLiked(true)
                            }} className="m-auto" src={loveIconGreen} width={18} alt="" />
                            :
                            <Image onClick={()=>{
                                liked? setLiked(false) : setLiked(true)
                            }} className="m-auto" src={loveIconWhite} width={18} alt="" />
                    }
                    <Image className="m-auto ml-2.5" src={pipIcon} width={18} alt="" />
                    <div></div>
                </div>

            </div>
    );
}

export default PlayerLeftContainer;