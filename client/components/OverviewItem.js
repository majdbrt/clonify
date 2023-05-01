import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import SongTitle from "./SongTitle";
import playIcon from '../public/images/play-icon.png';
import ColorThief from 'colorthief';
import useStore from "../store/useStore";

function OverviewItem(props) {
    const imageRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [color, setColor] = useState(null);
    const [overViewColor, setOverViewColor] = useStore(

        (state) => [state.overViewColor, state.setOverViewColor]
    );
    const colorThief = new ColorThief();

    
 const image = new Image(360, 360);

 image.onload = async function (){
    if(image.complete && !props.like){
        const colorArr = colorThief.getColor(image);
        const adjustedColor = colorArr.map((x)=>{
            return x*5/6;
        })
        setColor( adjustedColor);
        
    }
    
 }

    return (
        <div onMouseEnter={async () => {
            setIsFocused(true);
            if(props.like){
                setOverViewColor([29,13,70]);
            }
            else{
                setOverViewColor(color);
            }
            
            console.log(color);
            // Make sure image is finished loading
          
                /*
                if (imageRef) {
                    const color = colorThief.getColor(imageRef);
                    console.log(color);
    
                }
    */
            }
        } onMouseLeave={() => setIsFocused(false)} className={`flex ${window?.innerWidth < 1190 ? 'h-16' : 'h-20'}  relative`}>
            {props.like ?
                <div style={{

                    background: 'rgb(29,13,70)',
                    background: 'linear-gradient(135deg, rgba(67,26,182,1) 0%, rgba(121,141,137,1) 89%)'
                }} className={`flex  ${window?.innerWidth < 1190 ? 'w-16' : 'w-1/5'}  rounded-l  `}>
                    <NextImage  className={`m-auto `} width={58} src={props.imgSrc} alt="" />
                </div> :
                <img ref={imageRef} onLoad={async ()=>{
                    image.src = props.imgSrc;
                    image.crossOrigin = 'Anonymous';
                    
                }} className={`  ${window?.innerWidth < 1190 ? 'w-16' : 'w-1/5'}  rounded-l-sm `} width={30} src={props.imgSrc} alt="" />
            }

            <div className={`flex-1 flex ${isFocused ? 'bg-neutral-300/30' : 'bg-stone-500/25'}  `}>
                <div className={`w-3 bg-gradient-to-r ${isFocused ? 'from-stone-700' : 'from-stone-800 '} h-full`}></div>
                <SongTitle text={props.songTitle} />
            </div>
            <div className={`flex w-20 rounded-r ${isFocused ? 'bg-neutral-300/30' : 'bg-stone-500/25'} `}>
                {
                    isFocused && <div className={`bg-green-400 rounded-full flex w-12 h-12 shadow-lg shadow-neutral-800 m-auto hover:scale-105`}>
                        <NextImage className="m-auto pl-1" src={playIcon} width={26} alt="" />
                    </div>
                }


            </div>
        </div>
    );
}

export default OverviewItem;