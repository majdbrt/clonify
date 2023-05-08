import React from "react";

function LinksColumn(props){
    const content = props.content;

    return(
        <div className="flex flex-col w-52">
            <p className="text-white font-extrabold">{props.header}</p>
            {content.map((link, index)=> <p key={index} className="text-neutral-400 hover:text-white hover:underline font-medium py-2">{link}</p>)}
        </div>
    );
}

export default LinksColumn;