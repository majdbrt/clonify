import React, { useEffect, useRef, useState } from "react";
import previousIcon from '../public/images/previous-icon.png';
import previousIconHighlighted from '../public/images/previous-icon-highlighted.png';
import nextIcon from '../public/images/next-icon.png';
import nextIconHighlighted from '../public/images/next-icon-highlighted.png';
import shuffleIcon from '../public/images/shuffle-icon.png';
import shuffleIconGreen from '../public/images/shuffle-icon-green.png';
import repeatIcon from '../public/images/repeat-icon.png';
import repeatIconGreen from '../public/images/repeat-icon-green.png';
import playIcon from '../public/images/play-icon.png';
import pauseIcon from '../public/images/pause-icon.png';
import Image from "next/image";

function PlayerCenterContainer() {
    const parentTrackSlider = useRef();
    const [playback, setPlayback] = useState({
        shuffle: false,
        repeat: false,
        sliderPosition: 50,
        prevHover: false,
        nextHover: false,
        sliderHover: false,
        play: false
    });

    function handleDrag(event) {

        const parentElem = parentTrackSlider?.current?.getBoundingClientRect();

        setPlayback(prev => ({
            ...prev,
            sliderPosition: event.clientX <= parentElem.left ? 0 : event.clientX >= parentElem.right ? parentElem.right - parentElem.left : event.clientX - parentElem.left
        }));

    }// handleDrag

    return (
        <div onClick={() => {

        }} className=" w-[700px] h-full  flex flex-col  my-auto  mx-auto px-2 overflow-hidden">
            <div className={` flex my-auto  mx-auto justify-between`}>
                {
                    !playback.shuffle ?
                        <Image onClick={() => {
                            setPlayback(prev => ({
                                ...prev,
                                shuffle: playback.shuffle ? false : true
                            }));
                        }} className="my-auto mx-2.5" src={shuffleIcon} width={19} alt="" />
                        :
                        <Image onClick={() => {
                            setPlayback(prev => ({
                                ...prev,
                                shuffle: playback.shuffle ? false : true
                            }));
                        }} className="my-auto mx-2.5" src={shuffleIconGreen} width={19} alt="" />
                }

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
                <div onClick={() => {
                    setPlayback(prev => ({
                        ...prev,
                        play: playback.play ? false : true
                    }));
                }} className={`  scale-[65%] bg-white rounded-full flex w-12 h-12 shadow-lg shadow-neutral-800 m-auto hover:scale-[70%]`}>
                    {
                        !playback.play ?
                            <Image className="m-auto pl-1 scale-[115%]" src={playIcon} width={26} alt="" />
                            :
                            <Image className="m-auto" src={pauseIcon} width={29} alt="" />
                    }
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
                {
                    !playback.repeat ?
                        <Image onClick={() => {
                            setPlayback(prev => ({
                                ...prev,
                                repeat: playback.repeat ? false : true
                            }));
                        }} className="my-auto mx-2.5" src={repeatIcon} width={19} alt="" />
                        :
                        <Image onClick={() => {
                            setPlayback(prev => ({
                                ...prev,
                                repeat: playback.repeat ? false : true
                            }));
                        }} className="my-auto mx-2.5" src={repeatIconGreen} width={19} alt="" />
                }

            </div>
            <div onMouseEnter={() => {
                setPlayback(prev => ({
                    ...prev,
                    sliderHover: true
                }));
            }} onMouseLeave={() => {
                setPlayback(prev => ({
                    ...prev,
                    sliderHover: false
                }));
            }} className=" w-full flex px-2 h-6  ">
                <div ref={parentTrackSlider} className="relative rounded-full w-full h-[3px] mx-auto mt-1 bg-zinc-600">
                    <div style={{
                        width: `${playback.sliderPosition}px`
                    }} className={`${playback.sliderHover ? 'bg-[#1ed760]' : 'bg-white'} rounded-full h-[3px]`}>

                    </div>
                    <div onDrag={handleDrag} style={{
                        left: `${playback.sliderPosition - 6}px`,
                        top: "-5px"
                    }} onDragEnd={handleDrag} className={`absolute ${playback.sliderHover ? '' : 'hidden'} h-3 w-3 bg-white rounded-full`}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerCenterContainer;
