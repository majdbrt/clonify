import React, { useEffect, useRef, useState } from "react";

import instance from "../api/instance";
import PlayerCenterContainer from "./PlayerCenterContainer";
import PlayerLeftContainer from './PlayerLeftContainer';
import PlayerRightContainer from "./PlayerRightContainer";


function Player() {
    const [song, setSong] = useState();
    useEffect(() => {
        instance.get('me/player')
            .then((response) => {
                // Load the song currently playing by devices logged into official Spotify site
                setSong(response?.data?.item);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="w-full  bg-zinc-900 px-4 flex ">
            <PlayerLeftContainer song={song}/>
            <PlayerCenterContainer />
            <PlayerRightContainer/>
        </div>
    );

}

export default Player;
