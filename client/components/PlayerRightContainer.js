import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import micIcon from '../public/images/mic-icon.png';
import micIconHighlighted from '../public/images/mic-icon-highlighted.png';
import stackIcon from '../public/images/stack-icon.png';
import stackIconHighlighted from '../public/images/stack-icon-highlighted.png';
import ipodIcon from '../public/images/ipod-icon.png';
import ipodIconHighlighted from '../public/images/ipod-icon-highlighted.png';
import expandIcon from '../public/images/expand-icon.png';
import expandIconHighlighted from '../public/images/expand-icon-highlighted.png';
import speakerIcon from '../public/images/speaker-icon.png';
import speakerIconHighlighted from '../public/images/speaker-icon-highlighted.png';

function PlayerRightContainer() {
    const parentVolumeSlider = useRef();
    const [icons, setIcons] = useState({
        mic: false,
        stack: false,
        ipod: false,
        expand: false,
        sliderHover: false,
        sliderPosition: 50,
    });

    function handleDrag(event) {
      
        const parentElem = parentVolumeSlider?.current?.getBoundingClientRect();

        setIcons(prev => ({
            ...prev,
            sliderPosition: event.clientX <= parentElem.left  ? 0 : event.clientX >= parentElem.right ? parentElem.right - parentElem.left : event.clientX - parentElem.left
        }));
  
    }// handleDrag



    return (
        <div className=" overflow-hidden flex h-14 my-auto ">
            <div className="my-auto mx-2">
                {
                    icons.mic ?
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                mic: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                mic: false
                            }));
                        }} src={micIconHighlighted} className="w-4 h-4" alt="" />
                        :
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                mic: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                mic: false
                            }));
                        }} src={micIcon} className="w-4 h-4 " alt="" />
                }

            </div>
            <div className="my-auto mx-2">
                {
                    icons.stack ?
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                stack: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                stack: false
                            }));
                        }} src={stackIconHighlighted} className="w-4 h-4 " alt="" />
                        :
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                stack: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                stack: false
                            }));
                        }} src={stackIcon} className="w-4 h-4 " alt="" />
                }

            </div>
            <div className="my-auto mx-2 mr-2">
                {
                    icons.ipod ?
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                ipod: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                ipod: false
                            }));
                        }} src={ipodIconHighlighted} className="w-4 h-4 " alt="" />
                        :
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                ipod: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                ipod: false
                            }));
                        }} src={ipodIcon} className="w-4 h-4 " alt="" />
                }
            </div>
            <div className="my-auto mx-2  flex">
                <div className="my-auto mr-2">
                    {
                        icons.sliderHover ?
                            <Image onMouseEnter={() => {
                                setIcons(prev => ({
                                    ...prev,
                                    sliderHover: true
                                }));
                            }} onMouseLeave={() => {
                                setIcons(prev => ({
                                    ...prev,
                                    sliderHover: false
                                }));
                            }} src={speakerIconHighlighted} className="w-4 h-4 " alt="" />
                            :
                            <Image onMouseEnter={() => {
                                setIcons(prev => ({
                                    ...prev,
                                    sliderHover: true
                                }));
                            }} onMouseLeave={() => {
                                setIcons(prev => ({
                                    ...prev,
                                    sliderHover: false
                                }));
                            }} src={speakerIcon} className="w-4 h-4 " alt="" />
                    }
                </div>
                <div onMouseEnter={() => {
                setIcons(prev => ({
                    ...prev,
                    sliderHover: true
                }));
            }} onMouseLeave={() => {
                setIcons(prev => ({
                    ...prev,
                    sliderHover: false
                }));
            }} className=" w-24 flex px-2 h-6 my-auto ">
                <div ref={parentVolumeSlider} className="relative rounded-full w-full h-[3px] mx-auto my-auto bg-zinc-600">
                    <div style={{
                        width:`${icons.sliderPosition}px`
                    }} className={`${icons.sliderHover ? 'bg-[#1ed760]' : 'bg-white'} rounded-full h-[3px]`}>

                    </div>
                    <div onDrag={handleDrag} style={{
                        left: `${icons.sliderPosition - 6}px`,
                        top: "-6px"
                    }} onDragEnd={handleDrag} className={`absolute ${icons.sliderHover ? '' : 'hidden'} h-3 w-3 bg-white rounded-full`}>

                    </div>
                </div>
            </div>

            </div>

            <div className=" ml-2 mx-2 my-auto">
                {
                    icons.expand ?
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                expand: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                expand: false
                            }));
                        }} src={expandIconHighlighted} className="w-3 h-3" alt="" />
                        :
                        <Image onMouseEnter={() => {
                            setIcons(prev => ({
                                ...prev,
                                expand: true
                            }));
                        }} onMouseLeave={() => {
                            setIcons(prev => ({
                                ...prev,
                                expand: false
                            }));
                        }} src={expandIcon} className="w-3 h-3 " alt="" />
                }
            </div>

        </div>
    );
}

export default PlayerRightContainer;