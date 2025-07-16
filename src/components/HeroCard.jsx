import { useEffect, useState } from 'react';
import { fetchHeroId } from '../services/fetchHero';
import HeroIntro from './HeroIntro';

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
    <div className='relative md:w-[80%] w-[90%] md:h-[70%] h-[90%] bg-sky-600 rounded-2xl'>
      <HeroIntro hero={hero} />
      <div className=''></div>
    </div>
  );
}

export default HeroCard;
