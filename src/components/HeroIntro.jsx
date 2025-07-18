function HeroIntro({hero}) {
    return (
      <div className='md:w-[35%] md:h-full w-full h-[30%] rounded-2xl relative overflow-hidden'>
        <img
          src={hero.image.url}
          alt={hero.name}
          className='w-full h-full rounded-2xl'
        />
        <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white text-lg space-y-1 opacity-100 rounded-b-2xl'>
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
    );
}

export default HeroIntro
