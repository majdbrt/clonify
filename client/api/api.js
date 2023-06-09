// generateRandomString and generateCodeChallenge are two methods required for the PKCE flow as documented by Spotify API documentations
export function generateRandomString(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}// generateRandomString

export async function generateCodeChallenge(codeVerifier) {
    function base64encode(string) {
        return window.btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
}// generateCodeChallenge




async function handleUnauthorizedResponse(error) {
    const originalRequest = error.config;

    if (error.response.status === 401 || !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            await refreshToken();
            const access_token = await localStorage.getItem('access_token');
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            return axiosApiInstance(originalRequest);
        } catch (err) {

        }


    }// if


}// handleUnauthorizedResponse

// const clientId = '3110ffaae8dd4ac6ba85607241b24c3b';
// const redirectUri = 'http://localhost:3000/callback';

// let codeVerifier = generateRandomString(128);
/*
generateCodeChallenge(codeVerifier).then(codeChallenge => {
  let state = generateRandomString(16);
  let scope = 'user-read-private user-read-email';

  localStorage.setItem('code_verifier', codeVerifier);

  let args = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge
  });

  window.location = 'https://accounts.spotify.com/authorize?' + args;
});
*/