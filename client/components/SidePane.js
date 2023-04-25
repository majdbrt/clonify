import React from "react";
import clonifyLogo from '../public/images/clonify-logo.png'
import Image from 'next/image'
function SidePane() {
    return (
        <div className="bg-zinc-950 w-48 h-full px-4 ">
            <div className="flex py-5 cursor-pointer">
                <div className="bg-white rounded-full w-fit">
                    <Image src={clonifyLogo} alt="" width={38} className="p-1 rotate-12" />

                </div>
                <h1 className="text-white font-bold text-xl my-auto px-1">Clonify</h1>
            </div>


        </div>
    );

}

export default SidePane;