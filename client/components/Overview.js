import React, { useEffect, useState } from "react";
import OverviewItem from "./OverviewItem";
import loveIconHighlighted from '../public/images/love-icon-highlighted.png';
import instance from "../api/instance";
import useStore from "../store/useStore";
import OverviewItemLoading from "./OverviewItemLoading";

function Overview() {
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(true);
    const [topArtists, setTopArtists] = useState();

    const [overViewColor, setOverViewColor, profileLoading, playlistsLoading, featuredPlaylistsLoading, albumsLoading, topArtistsLoading, setTopArtistsLoading, featuredPlaylists] = useStore(

        (state) => [state.overViewColor, state.setOverViewColor, state.profileLoading, state.playlistsLoading, state.featuredPlaylistsLoading, state.albumsLoading, state.topArtistsLoading, state.setTopArtistsLoading, state.featuredPlaylists]
    );

    function evaluateGreeting() {
        const date = new Date();
        const h = date.getHours();
        if (h > 0 && h <= 12) {
            return "Good morning";
        }
        else if (h > 12 && h <= 17) {
            return "Good afternoon";
        }
        return "Good evening";
    }// evaluateGreeting

    useEffect(() => {
        if (!profileLoading && !playlistsLoading && !featuredPlaylistsLoading && !albumsLoading && !topArtistsLoading) {
            setLoading(false);
        }

    }, [profileLoading, playlistsLoading, featuredPlaylistsLoading, albumsLoading, topArtistsLoading])

    useEffect(() => {
        const now = Date.now()
        instance.get('me/top/artists', {
            params: {
                limit: 5,
            }
        }).then((response) => {
            setTopArtists(response?.data?.items);
            setTopArtistsLoading();
        }).catch(error => console.log(error));
    }, [])

    useEffect(() => {
        setGreeting(evaluateGreeting());
        () => {
            setGreeting("")
        }
    }, []);

    if (loading) {
        return (
            <div style={{
                background: 'rgb(0,0,0)',
                background: `linear-gradient(0deg, rgba(24,24,27,1) 0%, rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},1) 100%)`
            }} className="pl-8 pr-8  flex flex-col  w-full  pt-5  ">
                <div className="rounded-full bg-neutral-700/50 h-16 w-[50%] mb-4"></div>
                <div className={`grid ${window?.innerWidth < 1190 ? 'grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 h-56' : 'grid-cols-3 grid-rows-2 gap-x-5 gap-y-4 h-40'}   w-full  flex-1 `}>

                    <OverviewItemLoading />
                    <OverviewItemLoading />
                    <OverviewItemLoading />
                    <OverviewItemLoading />
                    <OverviewItemLoading />
                    <OverviewItemLoading />
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{
                background: 'rgb(0,0,0)',
                background: `linear-gradient(0deg, rgba(24,24,27,1) 0%, rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},1) 100%)`
            }
            } className="pl-8 pr-8  flex flex-col  w-full  pt-5  " >

                <h1 className=" pb-6 ml-8 text-white font-bold scale-105 text-3xl">{greeting}</h1>
                <div className={`grid ${window?.innerWidth < 1190 ? 'grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 h-56' : 'grid-cols-3 grid-rows-2 gap-x-5 gap-y-4 h-40'}   w-full  flex-1 `}>

                    <OverviewItem like={true} songTitle="Liked Songs" imgSrc={loveIconHighlighted} />
                    {
                        topArtists === null?
                        topArtists?.map(topArtist => <OverviewItem key={topArtist.id} songTitle={topArtist.name} imgSrc={topArtist.images[0]?.url} />)
                        :
                        featuredPlaylists?.slice(0, 5).map(playlist => <OverviewItem key={playlist.id} songTitle={playlist.name} imgSrc={playlist?.images?.[0].url} />)
                    }
                </div>
            </div>
        );
    }

}


export default Overview;