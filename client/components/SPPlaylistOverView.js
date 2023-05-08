import React, { useEffect, useState } from "react";
import authApi from "../api/authApi";
import instance from "../api/instance";
import SPMainLink from "./SPMainLink";
import SPPlaylistItem from "./SPPlaylistItem";
import useStore from "../store/useStore";

function SPPlaylistOverview() {
    const [isFocused, setIsFocused] = useState(true);
    const [playlists, setPlaylists] = useState(null);
    const [ playlistsLoading, setPlaylistsLoading] = useStore(

        (state) => [state.playlistsLoading, state.setPlaylistsLoading]
    );

    useEffect(() => {
        instance.get('me/playlists', {
            params: {
                limit: 50,
                offset: 0
            }
        }).then((response) => {
            const playlists = response?.data?.items;
            setPlaylists(playlists);
            setPlaylistsLoading();
        });
    }, []);

    return (
        <div onMouseEnter={() => {
            setIsFocused(true);
        }} onMouseLeave={() => {
            setIsFocused(false);
        }} style={{
            overflow: 'overlay'
        }} className={`h-full w-full px-6 ${isFocused ? 'scrollbar-visible' : 'scrollbar-hidden'} `}>
            {playlists?.map(playlist => <SPPlaylistItem key={playlist.id} text={playlist.name} />)}
        </div>
    );
}

export default SPPlaylistOverview;