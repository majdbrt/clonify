import React, { useEffect, useState , useRef} from "react";
import useStore from "../store/useStore";
import popupIcon from '../public/images/popup-icon.png'
import Image from "next/image";
import { useRouter } from 'next/router';

function HeaderPopup() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false );
    const popup = useRef();
    const [headerProfileElement, mainElement] = useStore(

        (state) => [state.headerProfileElement]
    );

    function handleShowElement(event){
        if(headerProfileElement?.contains(event.target)){
           
            setIsVisible(true);
        }
    }
    function handleHideElement(event){
        if(!headerProfileElement?.contains(event.target) && popup.current && !popup.current.contains(event.target) ){
            setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleShowElement, true);
        document.addEventListener('click', handleHideElement, true);
     
        return () => {
            document.removeEventListener('click', handleShowElement, true);
            document.removeEventListener('click', handleHideElement, true);
        }
    }, [headerProfileElement,popup]);

    function handleLogout(){
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
        router.push('login');
        
    }

    return (
       
        <div ref={popup} style={{
            top: `${headerProfileElement?.offsetTop + 45}px`,
            left: `${headerProfileElement?.offsetLeft - 50}px`
        }} className={`absolute flex flex-col ${isVisible? '' : 'hidden'} bg-neutral-800  w-44 `}>
            <div className="flex m-1 flex-1 justify-between hover:bg-neutral-700">
                <p className=" my-auto p-2 scale-95 text-white text-sm font-medium">Account</p>
                <Image src={popupIcon} className="w-5 h-5 my-auto mx-2 " alt="" />
            </div>
            <div className="flex m-1 flex-1 justify-between hover:bg-neutral-700">
                <p className=" my-auto p-2 scale-95 text-white text-sm font-medium">Profile</p>
            </div>
            <div className="flex m-1 flex-1 justify-between hover:bg-neutral-700">
                <p className=" my-auto p-2 scale-95 text-white text-sm font-medium">Support</p>
                <Image src={popupIcon} className="w-5 h-5 my-auto mx-2 " alt="" />
            </div>
            <div className="flex m-1 flex-1 justify-between hover:bg-neutral-700">
                <p className=" my-auto p-2 scale-95 text-white text-sm font-medium">Download</p>
                <Image src={popupIcon} className="w-5 h-5 my-auto mx-2 " alt="" />
            </div>
            <div className="flex m-1 flex-1 justify-between hover:bg-neutral-700">
                <p className=" my-auto p-2 scale-95 text-white text-sm font-medium">Settings</p>
            </div>

            <div onClick={handleLogout} className="flex m-1 flex-1 justify-between border-t-2 border-neutral-700  hover:bg-neutral-700">
                <p className=" my-auto p-2 scale-95 text-white text-sm font-medium">Log out</p>
            </div>
        </div>
    );
 
}

export default HeaderPopup;