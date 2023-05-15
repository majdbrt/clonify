import React from "react";
import forwardIcon from '../public/images/forward-icon.png';
import backIcon from '../public/images/back-icon.png';
import Image from 'next/image';
import LandingPageButton from "./LandingPageButton";
import Router, { useRouter } from "next/router";
function LandingPageHeader() {
    const router = useRouter();



    return (

        <div className={`flex sticky top-0 h-16 pl-8 pr-8 z-10 w-full justify-between bg-neutral-900 `}>
            <div className="flex h-full    ">
                <Image className="my-auto cursor-no-drop mr-1 opacity-50" alt="" src={backIcon} width={36} />
                <Image className="my-auto cursor-no-drop  opacity-50" alt="" src={forwardIcon} width={36} />
            </div>
            <div className="flex">
                <p className="text-neutral-400 my-auto mx-6 cursor-pointer font-extrabold hover:text-white hover:scale-105">Sign up</p>
                <div className="m-auto" onClick={()=>{
                    router.push('/login')
                }}>
                    <LandingPageButton text="Log in" />
                </div>


            </div>

        </div>

    );
}

export default LandingPageHeader;
