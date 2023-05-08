import React from "react";


function OverviewItemLoading() {
    return (
        <div className="h-20 flex w-full ">

            <div className={`flex h-full bg-neutral-600 ${window?.innerWidth < 1190 ? 'w-16' : 'w-1/5'}  rounded-l  `}>

            </div>

            <div className="flex flex-1 rounded-r bg-neutral-700/50">
                <div className="rounded-full w-[90%]  h-8 m-auto bg-neutral-700"></div>
            </div>
        </div>
    );
}

export default OverviewItemLoading;