import React, {useState} from "react";
import Image from 'next/image'

function SPMainLink(props) {
    const [imgHover, setImgHover] = useState(false);

    return (
        <div className={`flex relative py-1.5 cursor-pointer ${props.highlighted ? 'text-white font-bold' : 'text-neutral-400 font-bold'} text-sm  hover:text-white  `}>
            <div onMouseEnter={()=>setImgHover(true)} onMouseLeave={()=>setImgHover(false)}>
                {imgHover ?( <Image alt="" src={props.imgSrc} width={props.width} /> ): (<Image alt="" src={props.altSrc} width={props.width} />)}               

            </div>

            <p className="my-auto px-3">{props.text}</p>
        </div>
    );
}

export default SPMainLink;