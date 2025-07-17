import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

const Search = ({ setHeroId }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchHero = async () => {
      if (!debouncedQuery) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_CONFIG_BASE_URL}/${
            import.meta.env.VITE_CONFIG_API_KEY
          }/search/${debouncedQuery}`
        );
        const data = await response.json();

        if (data.response === 'error') {
          setError(data.error);
        } else {
          const firstResult = data.results[0];
          setHeroId(firstResult.id); // 🔁 Update the heroId in App
          setError('');
        }
      } catch (err) {
        setError('Something went wrong.');
      }
    };

    fetchHero();
  }, [debouncedQuery]);

  return (
    <div className='w-full max-w-md'>
      <input
        type='text'
        value={query}
        placeholder='Search superheroes...'
        onChange={(e) => setQuery(e.target.value)}
        className='w-full p-2 border rounded-md bg-white text-xl text-black'
      />
      {error && <p className='text-red-500 mt-2'>{error}</p>}
    </div>
  );
};

export default Search;
