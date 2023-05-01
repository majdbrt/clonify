import React, { useState } from "react";
import Image from 'next/image'

function SPMainLink2(props) {
    const [imgHover, setImgHover] = useState(false);

    return (
        <div onMouseEnter={() => setImgHover(true)} onMouseLeave={() => setImgHover(false)} className={`flex relative py-1.5 cursor-pointer ${props.highlighted ? 'text-white font-bold' : 'text-neutral-400 font-bold'} text-sm  hover:text-white  `}>
            <div className="" style={props.heart && imgHover ?

                {
                    background: 'rgb(29,13,70)',
                    background: 'linear-gradient(135deg, hsl(256,75%,50%) 0%, hsl(168,8.1%,60%) 89%)'
                } : props.heart && !imgHover ?
                    {
                        background: 'rgb(29,13,70)',
                        background: 'linear-gradient(135deg, rgba(67,26,182,1) 0%, rgba(121,141,137,1) 89%)'
                    }

                    : null}>
                {imgHover ? (<Image alt="" src={props.imgSrc} width={props.width} />) : (<Image alt="" src={props.altSrc} width={props.width} />)}

            </div>


            <p className="my-auto px-3">{props.text}</p>
        </div>
    );
}

export default SPMainLink2;
/*
{
    background: 'rgb(99,102,241)',
    background: 'linear-gradient(135deg, rgba(99,102,241,1) 0%, rgba(110,231,183,1) 100%)'
}*/

/*

 {
                background: 'rgb(79, 70, 229)',
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 1) 0 %, rgba(5, 150, 105, 1) 100 %)'
            }
    */