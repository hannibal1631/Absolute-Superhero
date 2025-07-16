import React from 'react'

function DetailGrid({stats}) {
    return (
      <div className='flex flex-col gap-3'>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <h3 className='capitalize'>{key.replace(/-/g, ' ')}</h3>
            <h3>{value}</h3>
          </div>
        ))}
      </div>
    );
}

export default DetailGrid
