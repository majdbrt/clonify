import React from "react";
import MainWindowSectionItemLoading from "./MainWindowSectionItemLoading";

function MainWindowSectionLoading() {
   
    return (
        <div className="w-full px-8 py-4 flex flex-col">
            <div className="flex  justify-between">
                <div className="rounded-full bg-neutral-700/50 h-5 w-72 "></div>
            </div>
            <div className={`grid mt-6 grid-rows-1 gap-6 w-full h-64 grid-cols-6`}>
               <MainWindowSectionItemLoading/>
               <MainWindowSectionItemLoading/>
               <MainWindowSectionItemLoading/>
               <MainWindowSectionItemLoading/>
               <MainWindowSectionItemLoading/>
               <MainWindowSectionItemLoading/>
            </div>


        </div>
    );
}

export default MainWindowSectionLoading;