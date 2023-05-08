import React from "react";
import {generateRandomString, generateCodeChallenge} from '../api/api';

function LoginButton() {
    function handleClick(){
        const codeVerifier = generateRandomString(128);

        generateCodeChallenge(codeVerifier).then(codeChallenge => {
            const state = generateRandomString(16);
            const scope = 'user-read-private user-read-email playlist-read-private user-top-read user-library-read user-read-recently-played user-read-playback-state user-modify-playback-state streaming';
          
            localStorage.setItem('code_verifier', codeVerifier);
          
            const args = new URLSearchParams({
              response_type: 'code',
              client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
              scope: scope,
              redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
              state: state,
              code_challenge_method: 'S256',
              code_challenge: codeChallenge
            });
          
            window.location = 'https://accounts.spotify.com/authorize?' + args;
          });

    }
    return (
        <div onClick={handleClick} className="mx-auto mt-10 flex rounded-3xl  h-14 w-96  bg-green-500 hover:bg-green-400 hover:scale-105">
            <div className="m-auto font-semibold">LOG IN</div>
        </div>
    );
}

export default LoginButton;