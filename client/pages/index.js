

import SidePane from '../components/SidePane';
import React from 'react';
import LandingPageFooter from '../components/LandingPageFooter';
import LandingPageMainWindow from '../components/LandingPageMainWindow';


export default function Home() {



  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex flex-1 h-full w-full overflow-y-hidden'>
        <SidePane />

        <LandingPageMainWindow />
      </div>
      <LandingPageFooter />
    </div>
  );

}
