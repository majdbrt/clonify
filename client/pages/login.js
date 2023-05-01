import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import clonifyLogo from '../public/images/clonify-logo-dark.png';
import LoginButton from '../components/LoginButton';
import errorIcon from '../public/images/error-icon.png'

export default function Login() {
    const [showError, setShowError] = useState(false);
    const router = useRouter();
    const { error } = router.query;

    useEffect(() => {
        if (error) {
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
            }, 3000)
        }
    }, [error])

    return (
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
                    <Image src={errorIcon} width={50} alt=""/>
                    <div className="mx-6 my-auto font-bold text-3xl text-rose-500">Access Denied</div>
                </div>
            </div>
        </div>

    );

}