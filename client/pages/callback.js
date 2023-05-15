import { useRouter } from 'next/router';
import loadingIcon from '../public/images/loading-icon.png';
import Image from 'next/image';

// After the user log in through Spotify, the callback function will handle the response.
// if it is an approval response, the callback function will request an access token and a refresh token

const callback = () => {
    const router = useRouter();

    const { error, code, state } = router.query;
 
    if (error) {
        router.push('/login?error=access_denied');
    }
    else {
        const codeVerifier = localStorage.getItem('code_verifier');

        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            code_verifier: codeVerifier
        });

            const response = fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            })
                .then(response => {
                    if (!response.ok) {
                    }
                    return response.json();
                })
                .then(data => {
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                
                    window.location.href = "/home";
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        
    }// else

    return (
        <div className='bg-zinc-950 h-screen w-screen flex'>
            <Image className='m-auto  animate-spin' src={loadingIcon} alt="" priority={true} width={75} />
        </div>
    );
}

export default callback;