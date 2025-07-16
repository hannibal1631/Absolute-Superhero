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
    <div className='relative md:w-[80%] w-[90%] md:h-[70%] h-[90%] bg-sky-600 rounded-2xl'>
      <div className='md:w-[35%] md:h-full w-full h-[30%] rounded-2xl relative group overflow-hidden'>
        <img
          src={hero.image.url}
          alt={hero.name}
          className='w-full h-full rounded-2xl transition-all duration-300'
        />
        <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white text-lg space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl'>
          <p>
            <span className='font-semibold'>Name:</span> {hero.name}
          </p>
          <p>
            <span className='font-semibold'>Full Name:</span>{' '}
            {hero.biography['full-name']}
          </p>
          <p>
            <span className='font-semibold'>First Appearance:</span>{' '}
            {hero.biography['first-appearance']}
          </p>
          <p>
            <span className='font-semibold'>Publisher:</span>{' '}
            {hero.biography.publisher}
          </p>
        </div>
      </div>
      <div className=''></div>
    </div>
  );
}

export default HeroCard;
