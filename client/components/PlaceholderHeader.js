import React, { useEffect, useState } from "react";
import useStore from "../store/useStore";

function Header() {
    const [opacity, setOpacity] = useState('0');
    const [bgColor, setBgColor] = useState('#1d0d46');

    return (
       
        <div style={{
            backgroundColor : `${bgColor}FF`
        }} className={` flex absolute top-0 h-16 pl-8 pr-8 z-10 w-full justify-between `}>
            

        </div>

    );
}

export default Header;

/*
bg-[#1d0d46]
purple
*/