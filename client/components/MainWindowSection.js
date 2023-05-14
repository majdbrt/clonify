import React from "react";
import MainWindowSectionItem from "./MainWindowSectionItem";

function MainWindowSection(props) {
    const arr = props.content;
    const type = props.type;
    return (
        <div className="w-full px-8 py-4 flex flex-col">
            <div className="flex  justify-between">
                <p className="my-auto text-white hover:underline font-extrabold text-2xl">{props.sectionName}</p>
                <p className="my-auto font-extrabold hover:underline text-neutral-400">Show all</p>
            </div>
            <div className={`grid mt-6 grid-rows-1 gap-6 w-full h-64 grid-cols-6`}>
                {
                    arr?.map(elem => <MainWindowSectionItem key={type === 'album' ? elem?.album?.id : type==='playlist'? elem?.id : null} imgSrc={type === 'album' ? elem?.album?.images?.[0].url : type==='playlist'? elem?.images?.[0].url : null} name={type === 'album' ? elem?.album?.name : type==='playlist'? elem?.name : null} artists={type === 'album' ? elem?.album?.artists?.[0].name : type==='playlist'? elem?.artists?.[0].name : null} detail={type === 'album' ? elem?.album : type==='playlist'? elem : null} />)
                   }
            </div>


        </div>
    );
}

export default MainWindowSection;