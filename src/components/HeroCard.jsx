import { useEffect, useState } from 'react';
import { fetchHeroId } from '../services/fetchHero';
import HeroIntro from './HeroIntro';
import StatsGrid from './StatsGrid';

function HeroCard({ heroId }) {
  const [hero, setHero] = useState('');

  useEffect(() => {
    const getHero = async () => {
      const data = await fetchHeroId(heroId);
      setHero(data);
    };

    getHero();
  }, [heroId]);

  if (!hero) return <p>Loading...</p>;

  return (
    <div className='relative md:w-[80%] w-[90%] md:h-[70%] h-[90%] flex flex-col md:flex-row bg-sky-600 rounded-2xl'>
      <HeroIntro hero={hero} />
      <div className='p-5'>
        <StatsGrid title='Power Stats' stats={hero.powerstats} />
        <StatsGrid title='Appearance' stats={hero.appearance} />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default HeroCard;
