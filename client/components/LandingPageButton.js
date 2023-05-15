import React from "react";

function LandingPageButton(props) {

    return (
        <div className="bg-white flex m-auto cursor-pointer rounded-full h-10 hover:scale-105">
            <p className="text-black font-bold m-auto px-6">{props.text}</p>
        </div>
    );
}

export default LandingPageButton;


/*
blue 509af3
purple af2a97

*/