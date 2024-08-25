import React from 'react';
import image from './images/Bluestar logo.png';

const TaktBoard = () => {
  const data = [
    { time: '08:20 - 09:30 AM', target: 120, actual: 110, varianceUnits: 10, variancePercent: '92%', cumulativeTarget: 120, cumulativeActual: 110, reason: 'Start up loss' },
    { time: '09:30 - 10:30 AM', target: 130, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 130, cumulativeActual: '', reason: '' },
    { time: '10:30 - 11:30 AM', target: 140, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 140, cumulativeActual: '', reason: '' },
    { time: '11:30 - 12:30 PM', target: 150, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 150, cumulativeActual: '', reason: '' },
    { time: '12:30 - 01:30 PM', target: 160, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 160, cumulativeActual: '', reason: '' },
    { time: '01:30 - 02:30 PM', target: 160, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 160, cumulativeActual: '', reason: '' },
    { time: '02:30 - 03:30 PM', target: 160, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 160, cumulativeActual: '', reason: '' },
    { time: '03:30 - 04:30 PM', target: 160, actual: '', varianceUnits: '', variancePercent: '', cumulativeTarget: 160, cumulativeActual: '', reason: '' },
  ];
  return (
    
    <div className="min-h-screen bg-[linear-gradient(341deg,_#582A77_-2.27%,_#17518A_95%),_linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%)] overflow-hidden">
      
      <div className="bg-[#426489]  md:px-5 flex justify-between items-center">
        
      <div className="flex items-center  ">
  <div className="p-1 rounded-lg">
    <img src={image} alt="Logo" className="h-6 md:h-8" />
  </div>
</div>


        
<div className="flex-grow text-center flex items-center justify-center space-x-4">
  <h1 className="text-white text-xl md:text-2xl font-bold uppercase">PRODUCTION TAKT BOARD</h1>
  {/* <p className="text-white text-base md:text-lg font-medium"> (Target Vs Actual)</p> */}

</div>
   
        <div className="text-right text-white text-lg font-bold">
          <p className="mr-2">  G0 Assembly Line  </p>
        </div>
        <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16.5" fill="#00FF19" stroke="white" strokeWidth="3"/>
  </svg>
      </div>

      <div className="mt-4 bg-[#303e6f] p-4 rounded-md font-bold text-white">
  <div className="flex flex-wrap justify-between items-center">
  <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2">Date :</p>
      <p className="text-xl font-bold">10-08-2024 </p>
    </div>
    <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2"> Shift :</p>
      <p className="text-xl font-bold"> A</p>
    </div>
    <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2">Current Time:</p>
      <p className="text-xl font-bold">10:20 AM </p>
    </div>
    <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2">Product:</p>
      <p className="text-xl font-bold">VRF TD</p>
    </div>
    <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2">Shift Plan:</p>
      <p className="text-xl font-bold">980</p>
    </div>
    <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2">Shift Production:</p>
      <p className="text-xl font-bold">510</p>
    </div>
    <div className="flex items-center mr-4">
      <p className="text-xl font-bold mr-2">Current GAP:</p>
      <p className="text-xl font-bold">09</p>
    </div>
    <div className="flex items-center">
      <p className="text-xl font-bold mr-2">Avg UPH:</p>
      <p className="text-xl font-bold">108</p>
    </div>
  </div>
</div>


   <div className="mt-4 overflow-x-auto">
   <div className="grid grid-cols-8 gap-x-2 text-center text-xl font-bold">
    <div className="bg-gradient-to-r from-[#C376FF] to-[#516BF4] p-3 rounded-md col-span-1 text-white border border-[#383a6a]">HOUR TABLE</div>
    <div className="col-span-4">
      <div className="grid grid-cols-3">
        <div className="bg-[#00F0FF] py-3 border rounded-l-md border-[#383a6a]">TARGET (Units)</div>
        <div className="bg-[#00F0FF] py-3 border border-[#383a6a]">ACTUAL (Units)</div>
        <div className="bg-[#00F0FF] py-3 border rounded-r-md border-[#383a6a]">VARIANCE (Units)</div>
      </div>
    </div>
    <div className="col-span-3">
      <div className="grid grid-cols-3">
        <div className="bg-[#00F0FF] py-3 border rounded-l-md text-black border-[#383a6a]">CUMULATIVE (TAR)</div>
        <div className="bg-[#00F0FF] py-3 border text-black border-[#383a6a]">CUMULATIVE (ACT)</div>
        <div className="bg-[#00F0FF] py-3 border rounded-r-md text-black border-[#383a6a]">REASON</div>
      </div>
    </div>

    {data.map((row, index) => (
      <React.Fragment key={index}>
        <div className="bg-transparent p-2 sm:p-3 col-span-1 text-center flex items-center justify-center text-white border border-[#4c4e7a]">
            {row.time}
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="bg-transparent p-3 sm:p-6 text-white border border-[#4c4e7a]">{row.target || '-'}</div>
            <div className="bg-[#234777] p-3 sm:p-6 text-white border border-[#4c4e7a]">{row.actual || '-'}</div>
            <div className={`bg-transparent p-3 sm:p-6 text-white border border-[#4c4e7a] ${row.varianceUnits ? 'text-red-500' : ''}`}>{row.varianceUnits || '-'}</div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="bg-transparent p-3 sm:p-6 text-white border border-[#4c4e7a]">{row.cumulativeTarget || '-'}</div>
            <div className="bg-[#234777] p-3 sm:p-6 text-white border border-[#4c4e7a]">{row.cumulativeActual || '-'}</div>
            <div className="bg-transparent p-3 sm:p-6 text-white border border-[#4c4e7a]">{row.reason || '-'}</div>
          </div>
        </div>
      </React.Fragment>
    ))}
</div>

</div>
<div className="mt-8 text-center">
        <p className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-2 rounded-md inline-block text-base font-semibold">LINE STARTED AT:</p>
      </div>

     
    </div>
  );
};

export default TaktBoard;
