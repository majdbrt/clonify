
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { 
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(async (config) => {
    const access_token = await localStorage.getItem('access_token');
   
    config.headers.Authorization = 'Bearer ' + access_token;

    return config;
},
    (error) => {
        return Promise.reject(error);
    }

);

instance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    const refresh_token = await localStorage.getItem('refresh_token');
    if ( !originalRequest._retry && refresh_token) {
        originalRequest._retry = true;
        try {
            
            await refreshToken();
            const access_token = await localStorage.getItem('access_token');
            originalRequest.headers.Authorization = 'Bearer ' + access_token;
            return instance.request(originalRequest);
        } catch (err) {
          
            //window.location.href = "/login";
            return Promise.reject(err);
        }

    }// if\
  
   return Promise.reject(error);
})

export async function refreshToken() {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
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
               
                return response.json();
            })
            .then(data => {
                if(data.access_token && data.refresh_token){
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                }
            })
            .catch(error => {
                
            });

    }// if

}// refreshToken


export default instance;