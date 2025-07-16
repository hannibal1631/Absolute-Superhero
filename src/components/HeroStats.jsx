import StatsGrid from './StatsGrid';
import DetailGrid from './DetailGrid';

function HeroStats({heroStats}) {
    return (
      <div className='px-5 py-7 md:w-[65%] md:h-full w-full h-[70%] flex flex-col justify-between'>
        <StatsGrid title='Power Stats' stats={heroStats.powerstats} />
        <StatsGrid title='Appearance' stats={heroStats.appearance} />
        <DetailGrid stats={heroStats.work} />
        <DetailGrid stats={heroStats.connections} />
      </div>
    );
}

export default HeroStats
