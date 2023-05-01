import React, { useEffect, useRef, useState } from "react";
import Header from './Header';
import Overview from "./Overview";
import useStore from "../store/useStore";
import PlaceholderHeader from './PlaceholderHeader'
import MainWindowSection from "./MainWindowSection";

function MainWindow() {
    const [isFocused, setIsFocused] = useState(true);
    const mainWindow = useRef(null);

    const [windowYScroll, setWindowYScroll] = useStore(

        (state) => [state.windowYScroll, state.setWindowYScroll]
    )

    useEffect(()=>{

    },[])

    return (
        <div onMouseEnter={() => {

            setIsFocused(true);
        }} onMouseLeave={() => {

            setIsFocused(false);


        }} className=" h-full w-full flex flex-row">

            <div ref={mainWindow} onScroll={() => {
                const y = mainWindow.current.scrollTop
                setWindowYScroll(y);
            }}
                style={{
                    overflow: 'overlay',

                }}
                className={`relative mainWindow h-full flex-1 w-full ${isFocused ? 'scrollbar-visible' : 'scrollbar-hidden'} `}>
                <PlaceholderHeader/>
                <Header />
                <Overview />
                <div className="flex-1 flex-grow w-full bg-zinc-900 py-8 h-[400vh]">
                    <MainWindowSection/>
                </div>

            </div>
        </div>

    );
}

export default MainWindow;