import React from "react";

function SPPlaylistItem(props){

    return (
        <div className="text-neutral-400 py-1.5 font-bold text-sm hover:text-white">
            {props.text}
        </div>
    );
}

export default SPPlaylistItem