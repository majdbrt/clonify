import React, { useEffect, useState } from "react";
import nextIcon from '../public/images/next-icon.png';
import backIcon from '../public/images/back-icon.png';
import Image from 'next/image';
import useStore from "../store/useStore";
import authApi from "../api/authApi";
import dropdownIcon from '../public/images/dropdown-icon.png';
import instance from "../api/instance";

function Header() {
    const [opacity, setOpacity] = useState('0');
    const [user, setUser] = useState(null);
    const [bgColor, setBgColor] = useState('#1d0d46');
    const [windowYScroll, setWindowYScroll, overViewColor] = useStore(

        (state) => [state.windowYScroll, state.setWindowYScroll, state.overViewColor]
    );


    useEffect(() => {
        /*
        (async ()=>{
            const acces_token = localStorage.getItem('access_token');
            if(acces_token){
                console.log('header api call');
                const response = await fetch ('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: 'Bearer ' + acces_token
                    }
                });
    
                const data = await response.json();
                setUser({
                    profilePic: data.images[0],
                    name: data.display_name
                })
                console.log(data);
    
            }
        })().then((response)=>{

        }).catch((err)=>{
            console.log(err)
        })
        
            */

        authApi.get('me')
            .then(async (response) => {
                const data = response.data;
                setUser({
                    profilePic: data.images[0],
                    name: data.display_name
                })
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        console.log(windowYScroll);

        if (windowYScroll < 100) {
            setOpacity('0');
        }
        else if (windowYScroll === 100) {
            setOpacity('50');
        }
        else if (windowYScroll > 100) {
            setOpacity('100');
        }


    }, [windowYScroll]);

    return (

        <div style={{
            backgroundColor: windowYScroll < 50 ? `rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},1)` : windowYScroll >= 50 && windowYScroll < 150 ? `rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},0.5)` : `rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},1)`
        }} className={` flex sticky top-0 h-16 pl-8 pr-8 z-10 w-full justify-between `}>
            <div className="flex h-full    ">
                <Image className="my-auto cursor-no-drop mr-1 opacity-50" alt="" src={backIcon} width={36} />
                <Image className="my-auto cursor-no-drop  opacity-50" alt="" src={nextIcon} width={36} />
            </div>
            <div className="rounded-full h-8 w-32 flex my-auto   bg-[#100826] hover:bg-zinc-800">
                <img className="rounded-full mx-0.5 my-auto w-7" src={user?.profilePic?.url} alt="" />
                <div className=" mx-auto text-white mt-1 text-sm font-extrabold">{user?.name}</div>
                <Image className="h-3.5 w-3.5 my-auto mr-2" src={dropdownIcon} alt="" />
            </div>

        </div>

    );
}

export default Header;

/*
bg-[#1d0d46]
purple
*/