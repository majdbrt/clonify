import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import clonifyLogo from '../public/images/clonify-logo-dark.png';
import LoginButton from '../components/LoginButton';
import errorIcon from '../public/images/error-icon.png'
import instance from "../api/instance";
import loadingIcon from '../public/images/loading-icon.png';

export default function Login() {
    const [showError, setShowError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { error } = router.query;

    


    useEffect(()=>{
        // check if the user is already logged in, if so redirect to the home page automatically
            instance.get('me')
            .then( (response) => {
                
                    console.log(response)
                    setIsLoading(false);
                   // router.push('/home');
               
                
            }).catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
            setIsLoading(false);
        
        return ()=>{
            setIsLoading(false);
        }
    },[]);

    useEffect(() => {
        if (error) {
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
            }, 3000)
        }
    }, [error]);

    return (
        isLoading ?
            <div className='bg-zinc-950 h-screen w-screen flex'>
                <Image className='m-auto  animate-spin' src={loadingIcon} alt="" priority={true} width={75} />
            </div>
            :
            <div className="h-screen w-screen relative overflow-hidden">
                <div className='flex flex-col h-full w-full'>
                    <div className="flex mx-auto pt-6 pb-7 cursor-pointer">
                        <div className="bg-black rounded-full w-fit">
                            <Image src={clonifyLogo} alt="" width={38} className="p-1 rotate-12" />

                        </div>
                        <h1 className="text-black font-bold text-3xl my-auto px-2">Clonify</h1>
                    </div>
                    <hr></hr>

                    <p className="mt-10 text-sm font-bold mx-auto">To continue, log in to Spotify.</p>
                    <LoginButton />
                </div>
                <div className={`absolute flex bottom-0 h-96 w-full  duration-300 ${!showError ? 'translate-y-full' : ''} bg-zinc-950`}>
                    <div className="m-auto flex">
                        <Image src={errorIcon} width={50} alt="" />
                        <div className="mx-6 my-auto font-bold text-3xl text-rose-500">Access Denied</div>
                    </div>
                </div>
            </div>


    );

}