import React from "react";
import LandingPageButton from "./LandingPageButton";

function LandingPageFooter() {

    return (
        <div style={{
            background: "rgb(175,42,151)",
            background: "linear-gradient(90deg, rgba(175,42,151,1) 0%, rgba(80,154,243,1) 100%)"
        }} className="h-16 flex p-2 cursor-pointer">
            <div className="flex flex-col">
                <p className="text-sm text-white font-normal scale-y-90">PREVIEW OF CLOINIFY</p>
                <p className="text-md text-white font-medium">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div className="ml-auto my-auto mr-3">
                <LandingPageButton text="Sign up free"/>
            </div>

        </div>
    );
}

export default LandingPageFooter;


/*
blue 509af3
purple af2a97

*/