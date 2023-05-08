
import React from "react";

function MainWindowSectionItemLoading() {

    return (
        <div className={`flex overflow-hidden p-4 rounded flex-col bg-neutral-800/30 hover:bg-neutral-700/40`}>
            <div className="relative w-full h-2/3">


                <div className={`flex m-auto h-full bg-neutral-700/50 w-34  rounded  `}></div>

            </div>
            <div className={`flex my-auto mt-4 mb-2 h-8 bg-neutral-700/50 w-32  rounded-full  `}></div>
            <div className={`flex my-auto h-6 bg-neutral-700/50 w-20  rounded-full  `}></div>
        </div>
    );
}

export default MainWindowSectionItemLoading;