import React, { useEffect, useState, useRef } from "react";
import forwardIcon from '../public/images/forward-icon.png';
import backIcon from '../public/images/back-icon.png';
import Image from 'next/image';
import useStore from "../store/useStore";
import authApi from "../api/authApi";
import dropdownIcon from '../public/images/dropdown-icon.png';
import instance from "../api/instance";
import profileIcon from '../public/images/profile-icon.png';
import HeaderPopup from "./HeaderPopup";

function Header() {
    const [opacity, setOpacity] = useState('0');
    const [user, setUser] = useState(null);
    const [bgColor, setBgColor] = useState('#1d0d46');
    const headerProfile = useRef(null);
    const [windowYScroll, setWindowYScroll, overViewColor, profileLoading, setProfileLoading, headerProfileElement, setHeaderProfileElement] = useStore(

        (state) => [state.windowYScroll, state.setWindowYScroll, state.overViewColor, state.profileLoading, state.setProfileLoading, state.headerProfileElement, state.setHeaderProfileElement]
    );

    useEffect(() => {
        // getting user profile && refreshing token if needed
        authApi.get('me')
            .then(async (response) => {
                const data = response?.data;
                setUser({
                    profilePic: data.images[0],
                    name: data.display_name
                });
                setProfileLoading();
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {

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

    useEffect(()=>{
        setHeaderProfileElement(headerProfile.current);

        return ()=>{
            setHeaderProfileElement(null);
        }
    },[headerProfileElement])

    return (

        <div style={{
            backgroundColor: windowYScroll < 50 ? `rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},1)` : windowYScroll >= 50 && windowYScroll < 150 ? `rgba(${overViewColor?.[0]},${overViewColor?.[1]},${overViewColor?.[2]},0.5)` : `#1d0d46`
        }} className={`flex sticky top-0 h-16 pl-8 pr-8 z-10 w-full justify-between `}>
            <div className="flex h-full    ">
                <Image className="my-auto cursor-no-drop mr-1 opacity-50" alt="" src={backIcon} width={36} />
                <Image className="my-auto cursor-no-drop  opacity-50" alt="" src={forwardIcon} width={36} />
            </div>
            <div ref={headerProfile}  className="rounded-full h-8 w-32 flex my-auto    bg-neutral-900 hover:bg-zinc-800">
                {
                    user?.profilePic?.url ?
                        <img className="rounded-full mx-0.5 my-auto w-7" src={user?.profilePic?.url} alt="" />
                        :
                        <Image src={profileIcon} className="w-7 p-1 h-7 m-auto bg-[#282828] rounded-full" alt="" />
                }

                <div className=" mx-auto text-white mt-1 text-sm font-extrabold">{user?.name}</div>
                <Image className="h-3.5 w-3.5 my-auto mr-2" src={dropdownIcon} alt="" />
            </div>
            <HeaderPopup />

        </div>

    );
}

export default Header;

/*
bg-[#1d0d46]
purple
*/