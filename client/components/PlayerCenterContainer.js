import React, { useEffect, useRef, useState } from "react";
import previousIcon from '../public/images/previous-icon.png';
import previousIconHighlighted from '../public/images/previous-icon-highlighted.png';
import nextIcon from '../public/images/next-icon.png';
import nextIconHighlighted from '../public/images/next-icon-highlighted.png';
import shuffleIcon from '../public/images/shuffle-icon.png';
import shuffleIconGreen from '../public/images/shuffle-icon-green.png';
import repeatIcon from '../public/images/shuffle-icon.png';
import repeatIconGreen from '../public/images/shuffle-icon-green.png';
import playIcon from '../public/images/play-icon.png';
import Image from "next/image";

function PlayerCenterContainer() {
    const whiteTrackSlider = useRef();
    const parentTrackSlider = useRef();
    const [playback, setPlayback] = useState({
        shuffle: false,
        repeat: false,
        position: 50,
        sliderHover: false,
        prevHover: false,
        nextHover: false,
        trackBallPosition: 0
    });

    function handleDrag(event) {

        const left = whiteTrackSlider?.current?.getBoundingClientRect()?.left
        const parentSlider = parentTrackSlider?.current?.getBoundingClientRect();

        if (event.clientX <= parentSlider.right && event.clientX >= parentSlider.left) {
            setPlayback(prev => ({
                ...prev,
                position: event.clientX - left
            }));
        }// if

    }

    useEffect(() => {
        setPlayback(prev => ({
            ...prev,
            trackBallPosition: whiteTrackSlider?.current?.clientWidth
        }))
    }, [playback.position])


    return (
        <div onClick={() => {

        }} className="relative w-[500px] h-full  flex flex-col py-4  mx-auto px-2 overflow-hidden">
            <div className={` flex my-auto  mx-auto justify-between`}>
                <Image className="my-auto mx-2.5" src={shuffleIcon} width={19} alt="" />
                {
                    playback.prevHover ?
                        <Image onMouseEnter={() => {
                            setPlayback(prev => ({
                                ...prev,
                                prevHover: true
                            }));
                        }} onMouseLeave={() => {
                            setPlayback(prev => ({
                                ...prev,
                                prevHover: false
                            }));
                        }} className="my-auto mx-2.5" src={previousIconHighlighted} width={19} alt="" />
                        :
                        <Image onMouseEnter={() => {
                            setPlayback(prev => ({
                                ...prev,
                                prevHover: true
                            }));
                        }} onMouseLeave={() => {
                            setPlayback(prev => ({
                                ...prev,
                                prevHover: false
                            }));
                        }} className="my-auto mx-2.5" src={previousIcon} width={19} alt="" />
                }
                <div className={`  scale-[65%] bg-white rounded-full flex w-12 h-12 shadow-lg shadow-neutral-800 m-auto hover:scale-[70%]`}>
                    <Image className="m-auto pl-1 scale-[115%]" src={playIcon} width={26} alt="" />
                </div>
                {
                    playback.nextHover ?
                        <Image onMouseEnter={() => {
                            setPlayback(prev => ({
                                ...prev,
                                nextHover: true
                            }));
                        }} onMouseLeave={() => {
                            setPlayback(prev => ({
                                ...prev,
                                nextHover: false
                            }));
                        }} className="my-auto mx-2.5" src={nextIconHighlighted} width={19} alt="" />
                        :
                        <Image onMouseEnter={() => {
                            setPlayback(prev => ({
                                ...prev,
                                nextHover: true
                            }));
                        }} onMouseLeave={() => {
                            setPlayback(prev => ({
                                ...prev,
                                nextHover: false
                            }));
                        }} className="my-auto mx-2.5" src={nextIcon} width={19} alt="" />
                }
                <Image className="my-auto mx-2.5" src={repeatIcon} width={19} alt="" />
            </div>
            <div ref={parentTrackSlider} onMouseEnter={() => {
                setPlayback(prev => ({
                    ...prev,
                    sliderHover: true
                }));
            }} onMouseLeave={() => {
                setPlayback(prev => ({
                    ...prev,
                    sliderHover: false
                }));
            }} className="w-full mx-auto  my-auto  h-[3px] bg-zinc-600 rounded-full">
                <div ref={whiteTrackSlider} style={{
                    width: `${playback.position}px`
                }} className={` h-full bg-white hover:bg-[#1ed760] ${playback.sliderHover ? 'bg-[#1ed760]' : ''} rounded-full`}>

                </div>
            </div>
            {
                playback.sliderHover ?
                    <div onMouseEnter={() => {
                        setPlayback(prev => ({
                            ...prev,
                            sliderHover: true
                        }))
                    }} onMouseLeave={() => {
                        setPlayback(prev => ({
                            ...prev,
                            sliderHover: false
                        }))
                    }} onDrag={handleDrag} style={{
                        left: `${playback.trackBallPosition}px`,
                        top: `64.5px`
                    }} className="absolute w-3 bg-white h-3 rounded-full"></div>
                    :
                    <></>
            }
        </div>
    );
}

export default PlayerCenterContainer;
