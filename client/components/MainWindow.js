import React, { useEffect, useRef, useState } from "react";
import Header from './Header';
import Overview from "./Overview";
import useStore from "../store/useStore";
import PlaceholderHeader from './PlaceholderHeader'
import MainWindowSection from "./MainWindowSection";
import instance from "../api/instance";
import MainWindowSectionItem from "./MainWindowSectionItem";
import MainWindowSectionLoading from "./MainWindowSectionLoading";
import LinksSection from "./LinksSection";

function MainWindow() {
    const [isFocused, setIsFocused] = useState(true);
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const mainWindow = useRef(null);
    const [loading, setLoading] = useState(true);
    const [newReleases, setNewReleases] = useState([]);

    const [setWindowYScroll, profileLoading, playlistsLoading, featuredPlaylistsLoading, albumsLoading, topArtistsLoading, setAlbumsLoading, setFeaturedPlaylistsLoading, setFeaturedPlaylists, newReleasesLoading, setNewReleasesLoading] = useStore(

        (state) => [state.setWindowYScroll, state.profileLoading, state.playlistsLoading, state.featuredPlaylistsLoading, state.albumsLoading, state.topArtistsLoading, state.setAlbumsLoading, state.setFeaturedPlaylistsLoading, state.setFeaturedPlaylists, state.newReleasesLoading, state.setNewReleasesLoading]
    );
    useEffect(() => {
        instance.get('me/albums', {
            params: {
                limit: 6
            }
        }).then((response) => {

            setAlbums(response?.data?.items);
            setAlbumsLoading();
        }).catch(error => console.log(error));

        instance.get('browse/new-releases', {
            params: {
                limit: 6
            }
        }).then((response) => {
            setNewReleases(response?.data?.albums?.items);
            setNewReleasesLoading();
        }).catch(error => console.log(error));

        instance.get('browse/featured-playlists', {
            params: {
                limit: 6
            }
        }).then((response) => {
            setPlaylists(response.data.playlists.items);
            setFeaturedPlaylists(response.data.playlists.items);
            setFeaturedPlaylistsLoading();
        }).catch(error => console.log(error));

    }, []);

    useEffect(() => {
        if (!profileLoading && !playlistsLoading && !featuredPlaylistsLoading && !albumsLoading && !topArtistsLoading && !newReleasesLoading) {
            setLoading(false);
        }


    }, [profileLoading, playlistsLoading, featuredPlaylistsLoading, albumsLoading, topArtistsLoading, newReleasesLoading]);


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
                <PlaceholderHeader />
                <Header />
                <Overview />
                <div className="flex-1 flex-grow w-full py-4 bg-zinc-900 ">
                    {loading ?
                        <>
                            <MainWindowSectionLoading />
                            <MainWindowSectionLoading />
                            <MainWindowSectionLoading />
                        </>
                        :
                        <>
                            <MainWindowSection sectionName="New releases" type='playlist' content={newReleases} />
                            <MainWindowSection sectionName="Featured playlists" type='playlist' content={playlists} />
                            {
                                albums.length ?
                                    <MainWindowSection sectionName="Your albums" type={'album'} content={albums} />
                                    : null
                            }


                        </>
                    }

                    <LinksSection />

                </div>

            </div>
        </div>

    );
}

export default MainWindow;