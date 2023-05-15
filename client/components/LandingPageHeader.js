import React from "react";
import forwardIcon from '../public/images/forward-icon.png';
import backIcon from '../public/images/back-icon.png';
import Image from 'next/image';
import dropdownIcon from '../public/images/dropdown-icon.png';
import profileIcon from '../public/images/profile-icon.png';
import HeaderPopup from "./HeaderPopup";
import LandingPageButton from "./LandingPageButton";

function LandingPageHeader() {
  



    return (

        <div  className={`flex sticky top-0 h-16 pl-8 pr-8 z-10 w-full justify-between bg-neutral-900 `}>
            <div className="flex h-full    ">
                <Image className="my-auto cursor-no-drop mr-1 opacity-50" alt="" src={backIcon} width={36} />
                <Image className="my-auto cursor-no-drop  opacity-50" alt="" src={forwardIcon} width={36} />
            </div>
           <div className="flex">
           <p className="text-neutral-400 my-auto mx-6 cursor-pointer font-extrabold">Sign up</p>
           <LandingPageButton text="Log in"/>

           </div>

        </div>

    );
}

export default LandingPageHeader;
