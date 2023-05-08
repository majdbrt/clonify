import Image from "next/image";
import React from "react";
import LinksColumn from "./LinksColumn";
import twitterIcon from '../public/images/twitter-icon.png';
import facebookIcon from '../public/images/facebook-icon.png';
import instagramIcon from '../public/images/instagram-icon.png';

function LinksSection() {

    return (
        <div className="w-full flex flex-col my-7 px-8 overflow-hidden">
            <div className="flex flex-1">
                <LinksColumn header="Company" content={['About', 'Jobs', 'For the Record']} />
                <LinksColumn header="Communities" content={['For Artists', 'Developers', 'Advertising', 'Investors', 'Vendors', 'Spotify for Work']} />
                <LinksColumn header="Useful links" content={['Support', 'Free Mobile App']} />
                <div className="flex-1  ">
                    <div className="flex justify-end  ">
                        <Image className="mx-2 bg-neutral-700/60 p-2.5 hover:bg-neutral-500 rounded-full" width={39} src={instagramIcon} alt="" />
                        <Image className="mx-2 bg-neutral-700/60 p-2.5 hover:bg-neutral-500 rounded-full" width={39} src={twitterIcon} alt="" />
                        <Image className="mx-2 bg-neutral-700/60 p-2.5 hover:bg-neutral-500 rounded-full" width={39} src={facebookIcon} alt="" />
                    </div>
                </div>
            </div>
            <hr className="my-8 border-neutral-700 w-full" />
            <div className="flex mb-12">
                <p className="text-neutral-400 scale-[85%] hover:text-white  font-bold px-2">Legal</p>
                <p className="text-neutral-400 scale-[85%] hover:text-white  font-bold px-2">Privacy Center</p>
                <p className="text-neutral-400 scale-[85%] hover:text-white  font-bold px-2">Privacy Policy</p>
                <p className="text-neutral-400 scale-[85%] hover:text-white  font-bold px-2">Cookies</p>
                <p className="text-neutral-400 scale-[85%] hover:text-white  font-bold px-2">About Ads</p>
                <p className="text-neutral-400 scale-[85%] hover:text-white  font-bold px-2">Your Privacy Choices</p>
               
            </div>

        </div>
    );
}

export default LinksSection;