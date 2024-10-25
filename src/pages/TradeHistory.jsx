
import React from 'react';


const tradeImages = [
  {
    asset: 'OGUSDT',
    image: './td1.jpg', 
  },
  {
    asset: 'ALPACAUSDT',
    image: './td2.jpg', 
  },
  {
    asset: '1000PEPEUSDT',
    image: './td3.jpg', 
  },
  {
    asset: 'CHART',
    image: './td4.jpg',
  },
];

const TradeHistory = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Trade History</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tradeImages.map((trade, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={trade.image} 
              alt={trade.asset} 
              className="h-[200px] w-[200px] object-cover rounded shadow-md" 
            />
            <span className="mt-2 text-blue-600 font-semibold">{trade.asset}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;
