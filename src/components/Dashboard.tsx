import React, { useState } from 'react';
import LineGraph from './LineGraph';
import Map from './Map';
import classNames from 'classnames';


type ToggleOption = 'chart' | 'map' | null;

const Dashboard = () => {
  const [isToggle, setIsToggle] = useState<ToggleOption>(null);

  return (
    <>
      
      <div className='m-3 py-1 px-2 w-fit border-2 border-signin rounded-full'>
        <p>
          <button className={
            
            classNames(' text-taken hover:outline-taken hover:border-2  lg:py-1 lg:hover:rounded-full lg:px-2 px-2 font-medium'
            ,{'bg-signin text-white border-2 border-signin rounded-full': isToggle === 'chart', })
          }
            onClick={() => setIsToggle('chart')}>Chart</button> |&nbsp; 
          <button className={
            classNames(' text-taken hover:outline-taken hover:border-2 lg:py-1 lg:hover:rounded-full lg:px-2 px-2 font-medium'
            ,{'bg-signin text-white border-2 border-signin rounded-full': isToggle ===  'map', })
          }
          
          onClick={() => setIsToggle('map')}>Map</button>
        </p>
      </div>
      <div className="flex w-full container mx-0 p-4">
        {isToggle === 'chart' && (
          <div className="w-full">
            <h1 className='mb-3 text-center text-createaccbtn text-xl font-semibold'>Line Chart</h1>
            <LineGraph />
          </div>
        )}
        {isToggle === 'map' && (
          <div className="w-full">
            <h1 className='mb-3 text-center text-createaccbtn text-xl font-medium'>Map</h1>
            <Map />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
