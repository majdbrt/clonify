
import axios from "axios";


const authApi = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { 
    }
});

authApi.interceptors.request.use(async (config) => {
    const access_token = await localStorage.getItem('access_token');
    console.log(access_token)

    config.headers.Authorization = 'Bearer ' + access_token;

    return config;
},
    (error) => {
        return Promise.reject(error);
    }

);

authApi.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry ) {
        console.log("trying to refresh")
        originalRequest._retry = true;
        console.log(originalRequest._retry)
        try {
            console.log('refreshing the token');
            await refreshToken();
            const acces_token = localStorage.getItem('access_token');
            originalRequest.headers.Authorization = 'Bearer ' + acces_token;
            return authApi.request(originalRequest);
        } catch (err) {
            console.log("errored here")
           //await localStorage.removeItem('access_token');
            //window.location.href = "/login";
            console.log(error)
            return Promise.reject(err);
        }

    }// if\
   // await localStorage.removeItem('access_token');
   // window.location.href = "/login";
    return Promise.reject(error);
})

export async function refreshToken() {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
        console.log("there is a refreshToken")
        const body = new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            refresh_token: refresh_token
        });


        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP status ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                console.log('received new access and refresh')
            })
            .catch(error => {
                console.log('did not received new access and refresh')
                console.error('Error:', error);
              //  localStorage.removeItem('access_token');
                //localStorage.removeItem('refresh_token');
             //   window.location.href = "/login";
            });

    }// if

}// refreshToken


export default authApi;