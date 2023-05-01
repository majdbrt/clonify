import React from "react";

function MainWindowSection(props) {
 


    return (
        <div className="w-full px-8 grid">
            <div className="flex justify-between">
                <p className="my-auto text-white hover:underline font-extrabold text-2xl">Your albums</p>
                <p className="my-auto font-extrabold hover:underline text-neutral-400">Show all</p>
            </div>


        </div>
    );
}

export default MainWindowSection;