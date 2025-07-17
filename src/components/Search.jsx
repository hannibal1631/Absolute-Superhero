import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

const Search = () => {
  const [query, setQuery] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const debouncedQuery = useDebounce(query, 700); // 700ms delay

  useEffect(() => {
    const fetchHeroes = async () => {
      if (!debouncedQuery) {
        setHeroes([]);
        setError('');
        return;
      }

      setLoading(true);
      setError('');

      try {
        const response = await fetch(
          `${import.meta.env.VITE_CONFIG_API_URL}/search/${debouncedQuery}`
        );
        const data = await response.json();

        if (data.response === 'error') {
          setError(data.error);
          setHeroes([]);
        } else {
          setHeroes(data.results);
        }
      } catch (err) {
        setError('Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [debouncedQuery]);

  return (
    <div className='p-4 max-w-xl mx-auto'>
      <input
        type='text'
        value={query}
        placeholder='Search superheroes...'
        onChange={(e) => setQuery(e.target.value)}
        className='w-full p-2 border rounded-md text-black'
      />

      {loading && <p className='mt-2 text-yellow-400'>Loading...</p>}
      {error && <p className='text-red-500 mt-2'>{error}</p>}

      <ul className='space-y-4 mt-4'>
        {heroes.map((hero) => (
          <li
            key={hero.id}
            className='border p-4 rounded-md bg-gray-900 text-white'
          >
            <h2 className='text-lg font-bold'>{hero.name}</h2>
            <img src={hero.image.url} alt={hero.name} className='h-40 mt-2' />
            <p>Full Name: {hero.biography['full-name'] || 'Unknown'}</p>
            <p>Publisher: {hero.biography.publisher}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
