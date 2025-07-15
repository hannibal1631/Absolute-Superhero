import { useEffect, useState } from 'react';
import { fetchHeroId } from '../services/fetchHero';

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
    <div>
      <h2>{hero.name}</h2>
      <img src={hero.image.url} alt={hero.name} className='w-[300px] h-[300px]' />
      <p>Full Name: {hero.biography['full-name']}</p>
      <p>First Appearance: {hero.biography['first-appearance']}</p>
    </div>
  );
}

export default HeroCard;
