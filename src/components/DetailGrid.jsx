function DetailGrid({stats}) {
    return (
      <div className='flex flex-col gap-3'>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <h3 className='capitalize md:text-2xl md:font-bold'>{key.replace(/-/g, ' ')}</h3>
            <p className="md:text-xl">{value}</p>
          </div>
        ))}
      </div>
    );
}

export default DetailGrid
