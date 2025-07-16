import React from 'react';

const StatsGrid = ({ title, stats }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='flex md:flex-row mt-2 gap-7 text-center flex-wrap'>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <h3 className='capitalize'>{key.replace(/-/g, ' ')}</h3>
            <h3>{Array.isArray(value) ? value[0] : value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
