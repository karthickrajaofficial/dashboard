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
      {/* Header */}
      <div className="bg-[#426489] py-4 px-4 md:px-8 flex justify-between items-center">
         {/* Logo */}
         <div className="flex items-center space-x-4">
            <div className=" p-1 rounded-lg">
              <img src={image} alt="Logo" className="h-10 md:h-12" />
            </div>
          </div>
        {/* Title */}
        <div className="flex-grow text-center">
          <h1 className="text-white text-2xl font-bold uppercase">PRODUCTION TAKT BOARD</h1>
          <p className="text-white text-lg font-medium">Target Vs Actual</p>
        </div>
        {/* Assembly Line Information */}
        <div className="text-right text-white text-lg font-bold">
          <p>Assembly Line: G0</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* First Grid */}
  <div className="bg-[#303e6f] p-4 rounded-md font-bold text-white">
    <div className="flex justify-center items-center mb-2">
      <p className="text-xl font-bold mr-4">Date:</p>
      <p className="text-xl font-bold">10-08-2024</p>
    </div>
    <div className="flex justify-center items-center mb-2">
      <p className="text-xl font-bold mr-4">Shift:</p>
      <p className="text-xl font-bold">A</p>
    </div>
    <div className="flex justify-center items-center">
      <p className="text-xl font-bold mr-4">Current Time:</p>
      <p className="text-xl font-bold">10:20 AM</p>
    </div>
  </div>

  {/* Second Grid */}
  <div className="bg-[#303e6f] p-4 rounded-md font-bold text-white">
    <div className="flex justify-center items-center mb-2">
      <p className="text-xl font-bold mr-4">Product:</p>
      <p className="text-xl font-bold">VRF TD</p>
    </div>
    <div className="flex justify-center items-center mb-2">
      <p className="text-xl font-bold mr-4">Shift Plan:</p>
      <p className="text-xl font-bold">980</p>
    </div>
    <div className="flex justify-center items-center">
      <p className="text-xl font-bold mr-4">Shift Production:</p>
      <p className="text-xl font-bold">510</p>
    </div>
  </div>

  {/* Third Grid */}
  <div className="bg-[#303e6f] p-4 rounded-md font-bold text-white">
    <div className="flex justify-center items-center mb-2">
      <p className="text-xl font-bold mr-4">Current GAP:</p>
      <p className="text-xl font-bold">09</p>
    </div>
    <div className="flex justify-center items-center mb-2">
      <p className="text-xl font-bold mr-4">Avg UPH:</p>
      <p className="text-xl font-bold">108</p>
    </div>
    <div className="flex justify-center items-center">
      <p className="text-xl font-bold mr-4">Achieved Production Vs Target %</p>
      <div className="relative w-16 h-16 mx-auto">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path
            className="text-gray-800"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="2.5"
            stroke="currentColor"
          />
          <path
            className="text-yellow-500"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            strokeWidth="2.5"
            strokeDasharray="52, 100"
            stroke="currentColor"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">52%</span>
        </div>
      </div>
    </div>
  </div>
</div>







   {/* Main Table */}
   <div className="mt-4 overflow-x-auto">
  <div className="grid grid-cols-8 gap-x-2  text-center text-xl font-bold">
    {/* Heading Grid */}
    <div className="bg-gradient-to-r from-[#C376FF] to-[#516BF4] p-2 rounded-md col-span-1 text-white border border-[#383a6a]">HOUR TABLE</div>
    <div className="col-span-4">
      <div className="grid grid-cols-4 ">
        <div className="bg-[#00F0FF] p-2 border rounded-l-md border-[#383a6a]">TARGET <br /> (Units)</div>
        <div className="bg-[#00F0FF] p-2 border border-[#383a6a]">ACTUAL <br /> (Units)</div>
        <div className="bg-[#00F0FF] p-2 border border-[#383a6a]">VARIANCE <br /> (Units)</div>
        <div className="bg-[#00F0FF] p-2  border rounded-r-md border-[#383a6a]">VARIANCE TO TARGET %</div>
      </div>
    </div>
    <div className="col-span-3">
      <div className="grid grid-cols-3 ">
        <div className="bg-[#00F0FF] p-2 rounded-l-md text-black border-[#383a6a]">CUMULATIVE TARGET</div>
        <div className="bg-[#00F0FF] p-2 text-black border-[#383a6a]">CUMULATIVE ACTUAL</div>
        <div className="bg-[#00F0FF] p-2 rounded-r-md text-black border-[#383a6a]">REASON FOR VARIANCE</div>
      </div>
    </div>

    {/* Data Grids */}
    {data.map((row, index) => (
      <React.Fragment key={index}>
        <div className="bg-transparent p-2  col-span-1 text-white border border-[#383a6a]">{row.time}</div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 ">
            <div className="bg-transparent p-2  text-white border border-[#383a6a]">{row.target || '-'}</div>
            <div className="bg-transparent p-2 text-white border border-[#383a6a]">{row.actual || '-'}</div>
            <div className={`bg-transparent p-2 text-white border border-[#383a6a] ${row.varianceUnits ? 'text-red-500' : ''}`}>{row.varianceUnits || '-'}</div>
            <div className="bg-transparent p-2  text-white border border-[#383a6a]">{row.variancePercent || '-'}</div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3 ">
            <div className="bg-transparent p-2  text-white border border-[#383a6a]">{row.cumulativeTarget || '-'}</div>
            <div className="bg-transparent p-2 text-white border border-[#383a6a]">{row.cumulativeActual || '-'}</div>
            <div className="bg-transparent p-2  text-white border border-[#383a6a]">{row.reason || '-'}</div>
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
</div>




      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-2 rounded-md inline-block text-base font-semibold">LINE STARTED AT:</p>
      </div>
    </div>
  );
};

export default TaktBoard;
