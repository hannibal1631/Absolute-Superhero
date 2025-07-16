function StatsGrid({ title, stats }) {
  return (
    <div>
      <h2 className="capitalize text-2xl font-bold">{title}</h2>
      <div className='flex md:flex-row gap-7 text-center flex-wrap'>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <h3 className='capitalize text-lg font-semibold'>{key.replace(/-/g, ' ')}</h3>
            <p className="text-xl">{Array.isArray(value) ? value[0] : value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsGrid;
