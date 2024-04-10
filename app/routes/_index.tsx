import { useState } from 'react'

const App = () => {
  const timeSlots = [
    '18:00',
    '19:00',
    '20:00'
  ];

  const imagesPerSlot = 4;

  return (
    <div className="flex flex-col gap-4 p-8 bg-gray-800 text-white font-sans min-h-screen">
      {timeSlots.map((slot, index) => (
        <div key={index} className="flex">
          <div className="mr-4 font-bold text-lg min-w-[50px]">{slot}</div>
          <div className="flex gap-4 flex-wrap">
            {Array.from({ length: imagesPerSlot }, (_, i) => (
              <div key={i} className="w-32 h-32 bg-gray-700 flex items-center justify-center text-gray-400 cursor-pointer"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
