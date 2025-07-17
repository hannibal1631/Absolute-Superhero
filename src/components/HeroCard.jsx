import { useEffect, useState } from 'react';
import { fetchHeroId } from '../services/fetchHero';
import HeroIntro from './HeroIntro';
import HeroStats from './HeroStats';

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
    <div className='relative md:w-[80%] w-[90%] md:h-[70%] h-[90%] flex flex-col md:flex-row bg-indigo-950 rounded-2xl'>
      <HeroIntro hero={hero} />
      <HeroStats heroStats={hero} />
    </div>
  );
}

export default HeroCard;
