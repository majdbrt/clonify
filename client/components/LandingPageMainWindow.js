import React, { useEffect, useRef, useState } from "react";

import useStore from "../store/useStore";
import MainWindowSection from "./MainWindowSection";
import instance from "../api/instance";
import MainWindowSectionLoading from "./MainWindowSectionLoading";
import LinksSection from "./LinksSection";
import LandingPageHeader from "./LandingPageHeader";

function LandingPageMainWindow() {
    const [isFocused, setIsFocused] = useState(true);
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const mainWindow = useRef(null);
    const [loading, setLoading] = useState(true);

    const [setWindowYScroll, profileLoading, playlistsLoading, featuredPlaylistsLoading, albumsLoading, topArtistsLoading, setAlbumsLoading, setFeaturedPlaylistsLoading, setFeaturedPlaylists] = useStore(

        (state) => [state.setWindowYScroll, state.profileLoading, state.playlistsLoading, state.featuredPlaylistsLoading, state.albumsLoading, state.topArtistsLoading, state.setAlbumsLoading, state.setFeaturedPlaylistsLoading, state.setFeaturedPlaylists]
    );
    useEffect(() => {
     
        instance.get('browse/featured-playlists', {
            params: {
                limit: 6
            }
        }).then((response) => {
            setPlaylists(response.data.playlists.items);
            setFeaturedPlaylists(response.data.playlists.items);
            setFeaturedPlaylistsLoading();
            setAlbumsLoading();
            setTopArtistsLoading();
            setPlaylistsLoading();
            setProfileLoading()

        }).catch(error => console.log(error));

    }, []);

    useEffect(() => {
        if (!profileLoading && !playlistsLoading && !featuredPlaylistsLoading && !albumsLoading && !topArtistsLoading) {
            setLoading(false);
        }


    }, [profileLoading, playlistsLoading, featuredPlaylistsLoading, albumsLoading, topArtistsLoading]);


    return (
        <div onMouseEnter={() => {
            setIsFocused(true);
        }} onMouseLeave={() => {

            setIsFocused(false);
        }} className=" h-full w-full flex flex-row overflow-hidden">

            <div ref={mainWindow} onScroll={() => {
                const y = mainWindow.current.scrollTop
                setWindowYScroll(y);
            }}
                style={{
                    overflow: 'overlay',

                }}
                className={`relative mainWindow h-full flex-1 w-full ${isFocused ? 'scrollbar-visible' : 'scrollbar-hidden'} `}>
               
                <LandingPageHeader/>
               
                <div className="flex-1 flex-grow w-full py-4 bg-zinc-900 ">
                    {loading ?
                        <>
                            <MainWindowSectionLoading />
                        </>
                        :
                        <>

                            <MainWindowSection sectionName="Featured playlists" type='playlist' content={playlists} />
                        </>
                    }

                    <LinksSection/>

                </div>

            </div>
        </div>

    );
}

export default LandingPageMainWindow;