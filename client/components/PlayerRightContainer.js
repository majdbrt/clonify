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
    const whiteVolumeSlider = useRef();
    const parentVolumeSlider = useRef();
    const [icons, setIcons] = useState({
        mic: false,
        stack: false,
        ipod: false,
        expand: false,
        position: 50,
        sliderHover: false,
        trackBallPosition: 0
    });

    function handleDrag(event) {

        const left = whiteVolumeSlider?.current?.getBoundingClientRect()?.left
        const parentSlider = parentVolumeSlider?.current?.getBoundingClientRect();

        if (event.clientX <= parentSlider.right && event.clientX >= parentSlider.left ) {
            setIcons(prev => ({
                ...prev,
                position: event.clientX - left
            }));
        }

    }

    useEffect(() => {
        console.log(whiteVolumeSlider?.current?.getBoundingClientRect().right)
        setIcons(prev => ({
            ...prev,
            trackBallPosition: whiteVolumeSlider?.current?.clientWidth
        }))
    }, [icons.position]);

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
                <div className="my-auto w-20 flex-1 px-1 relative">
                    <div ref={parentVolumeSlider} onMouseEnter={() => {
                        setIcons(prev => ({
                            ...prev,
                            sliderHover: true
                        }));
                    }} onMouseLeave={() => {
                        setIcons(prev => ({
                            ...prev,
                            sliderHover: false
                        }));
                    }} className=" mx-auto w-full my-auto  h-[3px] bg-zinc-600 rounded-full">
                        <div ref={whiteVolumeSlider} style={{
                            width: `${icons.position}px`
                        }} className={` h-full bg-white hover:bg-[#1ed760] ${icons.sliderHover ? 'bg-[#1ed760]' : ''} rounded-full`}>
                        </div>
                    </div>
                    {
                        icons.sliderHover ?
                            <div onMouseEnter={() => {
                                setIcons(prev => ({
                                    ...prev,
                                    sliderHover: true
                                }))
                            }} onMouseLeave={() => {
                                setIcons(prev => ({
                                    ...prev,
                                    sliderHover: false
                                }))
                            }} onDrag={handleDrag} style={{
                                left: `${icons.trackBallPosition}px`,
                                top: `-5px`
                            }} className="absolute w-3 bg-white h-3 rounded-full"></div>
                            :
                            <></>}
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