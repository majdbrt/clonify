import React, { useEffect, useState } from "react";
import OverviewItem from "./OverviewItem";
import loveIconHighlighted from '../public/images/love-icon-highlighted.png';
import instance from "../api/instance";
import useStore from "../store/useStore";

function Overview() {
    const [greeting, setGreeting] = useState("");
    const [topArtists, setTopArtists] = useState();
    const [overViewColor, setOverViewColor] = useStore(

        (state) => [state.overViewColor, state.setOverViewColor]
    );
    
    function evaluateGreeting() {
        const date = new Date();
        const h = date.getHours();
        if (h > 0 && h <= 12) {
            return "Good morning";
        }
        else if (h > 12 && h <= 17) {
            return "Good afternoon";
        }
        return "Good evening";
    }

    useEffect(()=>{
        const now = Date.now()
        instance.get('me/top/artists', {
            params: {
                limit: 5,
            }
        }).then((response) => {
            setTopArtists(response.data.items);
        }).catch(error => console.log(error));
    },[])

    useEffect(() => {
        setGreeting(evaluateGreeting());


        () => {
            setGreeting("")
        }
    }, []);


    return (
        <div style={{
            background: 'rgb(0,0,0)',
            background: `linear-gradient(0deg, rgba(24,24,27,1) 0%, rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},1) 100%)`
        }} className="pl-8 pr-8  flex flex-col  w-full  pt-5  ">
            <h1 className=" pb-6 ml-8 text-white font-bold scale-105 text-3xl">{greeting}</h1>
            <div className={`grid ${window?.innerWidth < 1190 ? 'grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 h-56' : 'grid-cols-3 grid-rows-2 gap-x-5 gap-y-4 h-40'}   w-full  flex-1 `}>
            
                <OverviewItem like={true} songTitle="Liked Songs" imgSrc={loveIconHighlighted} />
                {topArtists?.map(topArtist => <OverviewItem key={topArtist.id} songTitle={topArtist.name} imgSrc={topArtist.images[0]?.url} />)}
            </div>
        </div>
    );
}


export default Overview;