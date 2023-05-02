import React, { useEffect, useRef, useState } from "react";
import Header from './Header';
import Overview from "./Overview";
import useStore from "../store/useStore";
import PlaceholderHeader from './PlaceholderHeader'
import MainWindowSection from "./MainWindowSection";
import instance from "../api/instance";
import MainWindowSectionItem from "./MainWindowSectionItem";

function MainWindow() {
    const [isFocused, setIsFocused] = useState(true);
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const mainWindow = useRef(null);

    const [windowYScroll, setWindowYScroll] = useStore(

        (state) => [state.windowYScroll, state.setWindowYScroll]
    )

    useEffect(()=>{
        instance.get('me/albums', {
            params: {
                limit: 6
            }
        }).then((response) => {
            
           
            setAlbums(response.data.items)
        }).catch(error => console.log(error));

        instance.get('browse/featured-playlists', {
            params: {
                limit: 6
            }
        }).then((response) => {
            
           
            setPlaylists(response.data.playlists.items)
            console.log(response.data.playlists.items)
        }).catch(error => console.log(error));

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
                <div className="flex-1 flex-grow w-full py-4 bg-zinc-900  h-[400vh]">
                  
                  <MainWindowSection sectionName="Your albums" type={'album'} content={albums}/>
                    
                  <MainWindowSection sectionName="Featured playlists" type='playlist' content={playlists}/>
                </div>

            </div>
        </div>

    );
}

export default MainWindow;