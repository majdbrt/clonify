import React, { useEffect, useRef, useState } from "react";

import instance from "../api/instance";
import PlayerCenterContainer from "./PlayerCenterContainer";
import PlayerLeftContainer from './PlayerLeftContainer';
import PlayerRightContainer from "./PlayerRightContainer";


function Player() {
    const [song, setSong] = useState();
    const [playback, setPlayback] = useState();
    useEffect(() => {
        instance.get('me/player')
            .then((response) => {
                setSong(response?.data?.item);
                console.log(response?.data);
                setPlayback()
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="w-full h-[90px] bg-zinc-900 px-4 flex ">
            {/**/}
            <PlayerLeftContainer song={song}/>
            <PlayerCenterContainer />
            <PlayerRightContainer/>
        </div>
    );

}

export default Player;


/*
spotify green
1ed760


*/