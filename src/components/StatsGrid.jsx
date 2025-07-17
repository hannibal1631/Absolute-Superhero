function StatsGrid({ title, stats }) {
  return (
    <div>
      <h2 className="capitalize md:text-2xl md:font-bold text-zinc-400">{title}</h2>
      <div className='flex md:flex-row gap-5 text-center flex-wrap'>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <h3 className='capitalize md:text-lg md:font-semibold'>{key.replace(/-/g, ' ')}</h3>
            <p className="md:text-xl">{Array.isArray(value) ? value[0] : value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsGrid;
