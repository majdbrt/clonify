 <img src="https://user-images.githubusercontent.com/54665027/236880821-574dfe7f-c793-4a8b-8d02-4c3663b556ab.png" width=""> 


 
 
 <span style="color:red">Disclaimer: this app is for learning purpose only, all content is owned by [Spotify](https://open.spotify.com/) </span>
<br>
<table>
<tr>
<td ><img src="https://user-images.githubusercontent.com/54665027/236881205-8fe1e680-05c9-4b36-91e2-156f268dc0c0.png" width="50" > </td> 

<td><img src="https://user-images.githubusercontent.com/54665027/231562214-78102b25-036c-417e-b222-bcf6ce9d46b6.png" width="50"> </td>
<td><img src="https://user-images.githubusercontent.com/54665027/236884255-cff0240c-824b-4736-8419-aaef39a07ace.png" width="50"> </td>
<td><img src="https://user-images.githubusercontent.com/54665027/236882227-211e1869-d734-4161-ab6c-a219f790073d.png" width="300"> </td>
</tr>

</table>
<br>


 **A frontend Spotify clone powered by Spotify API built using Next.js and Tailwindcss**
 



## Key Features

* Implemented user log in through Spotify using OAuth 2.0 with the PKCE Flow. Leveraged Axios to intercept unauthorized responses due to expired access token and refresh it automatically. 

* Recreated the Spotify exerience by fetching the user's followed albums, tracks and playlists and used Tailwindcss to mirror the UI design of Spotify.

* Managed the state with Zustand and enabled routing for login and home page using Next.js router.

  

**A few restrictions to note from the Spotify API:**
* Landing page content (new releases and featured playlists) cannot be leaded without having an access token, therefore logging in is necessary.
* Since this web app is currently registered under the Development Mode on the Spotify Developer Dashboard, new users logging in to this web app need to be manually added to the User Management section on the Spotify Developer Dashboard.
*  The Spotify API doesn't provide access to audio content
 
 [Link to live app](https://clonify-majdbrt.vercel.app/). The web app is hosted on Vercel.

## App Overview (screenshots & animated gifs)
<img src="https://github.com/majdbrt/clonify/assets/54665027/80dfc23c-94e6-43d2-b3c1-3bf5d1c219d4" >


<img src="https://github.com/majdbrt/clonify/assets/54665027/68c19e8c-8dfc-48ce-9ddb-3d6ccc9483b2">


<img src="https://github.com/majdbrt/clonify/assets/54665027/46d62ef8-3529-4826-ac9f-7d85d59c43d9">


<img src="https://github.com/majdbrt/clonify/assets/54665027/0f70ea25-0d2f-445f-a5e6-e26889496a62" >


<img src="https://github.com/majdbrt/clonify/assets/54665027/68cf0149-02ea-4d21-abd0-56453ef2f281" >


<img src="https://github.com/majdbrt/clonify/assets/54665027/cfc73c00-137b-4528-81fc-75d954049d0a" >


<img src="https://github.com/majdbrt/clonify/assets/54665027/d604b4d3-c53f-496b-9fb5-8e980a25c460" >


## Installation Guide To Replicate the Results in the App Overview Section:
* Create a [Spotify developer account](https://developer.spotify.com/) and create an app as documented.
* Clone this repository or download it as ZIP.
* Once in the client directory, run the following command `npm install`.
* Create .env file in the client directory and add following environment variables: ``` NEXT_PUBLIC_REDIRECT_URI ``` and `NEXT_PUBLIC_CLIENT_ID`, where `NEXT_PUBLIC_REDIRECT_URI` is the Redirect URI and `NEXT_PUBLIC_CLIENT_ID` is the Client ID obtained from the first step.
* run the following command to start the app: `npm run dev`
