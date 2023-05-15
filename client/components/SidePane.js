import React, { useEffect, useState } from "react";
import Image from 'next/image'
import SPMainLink from "./SPMainLink";
import SPMainLink2 from "./SPMainLink2";
import SPPlaylistOverview from "./SPPlaylistOverView";

import clonifyLogo from '../public/images/clonify-logo.png'
import homeIcon from '../public/images/home-icon.png';
import searchIconHighlighted from '../public/images/search-icon-highlighted.png';
import searchIcon from '../public/images/search-icon.png';
import libraryIcon from '../public/images/library-icon.png';
import libraryIconHighlighted from '../public/images/library-icon-highlighted.png';
import addIcon from '../public/images/add-icon.png';
import addIconHighlighted from '../public/images/add-icon-highlighted.png';
import loveIconHighlighted from '../public/images/love-icon-highlighted.png';
import loveIcon from '../public/images/love-icon.png';
import installIconHighlighted from '../public/images/install-icon-highlighted.png';
import installIcon from '../public/images/install-icon.png';


function SidePane() {
    const [spWidth, setSPWidth] = useState(300);

    useEffect(() => {
        setSPWidth(localStorage.getItem('spWidth'));
    }, [])

    function handleDrag(event) {
        if (event.clientX <= 384) {
            setSPWidth(event.clientX);
        }// if
        else {
            setSPWidth(384);
        }// else
    }// handleDrag

    function handleDragEnd(event) {

        if (event.screenX <= 384) {
            setSPWidth(event.clientX);
            localStorage.setItem('spWidth', event.clientX.toString());
        }// if
        else {

            setSPWidth(384);
            localStorage.setItem('spWidth', '384');
        }// else
    }// handleDragEnd

    return (
        <div className="h-full flex  ">
            <div style={{
                width: ` ${spWidth}px`
            }} className={`bg-zinc-950  h-full flex flex-col `}>
                <div className="px-6">
                    <div className="flex pt-6 pb-7 cursor-pointer">
                        <div className="bg-white rounded-full w-fit">
                            <Image src={clonifyLogo} alt="" width={38} className="p-1 rotate-12" />

                        </div>
                        <h1 className="text-white font-bold text-2xl my-auto px-2">Clonify</h1>
                    </div>
                    <SPMainLink imgSrc={homeIcon} altSrc={homeIcon} text='Home' highlighted={true} width={28} />
                    <SPMainLink imgSrc={searchIconHighlighted} altSrc={searchIcon} text='Search' highlighted={false} width={28} />
                    <SPMainLink imgSrc={libraryIconHighlighted} altSrc={libraryIcon} text='Your Library' highlighted={false} width={28} />
                    <div className="pt-7">
                        <SPMainLink2 imgSrc={addIconHighlighted} altSrc={addIcon} text='Create Playlist' highlighted={false} width={28} />

                        <SPMainLink2 heart={true} imgSrc={loveIconHighlighted} altSrc={loveIcon} text='Liked Songs' highlighted={false} width={28} />

                    </div>
                    <hr className="mt-3 border-neutral-700 w-full"></hr>
                </div>

                <SPPlaylistOverview />
                <div className="px-6 h-24 w-full">
                    <SPMainLink2 imgSrc={installIconHighlighted} altSrc={installIcon} text='Install App' highlighted={false} width={28} />
                </div>
            </div>
            <div onDrag={handleDrag} onDragEnd={handleDragEnd} className="w-0 border-r-2 cursor-ew-resize h-full bg-zinc-950 border-zinc-950  hover:border-neutral-400"></div>


        </div>

    );

}

export default SidePane;
