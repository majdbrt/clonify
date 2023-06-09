
import MainWindow from '../components/MainWindow';
import SidePane from '../components/SidePane';
import Player from '../components/Player';
import React from 'react';

export default function Home() {


  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex flex-1 h-full w-full overflow-y-hidden'>
        <SidePane />
        <MainWindow />
      </div>
      <Player/>

    </div>
  );

}
