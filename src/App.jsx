import './index.css';
import HeroCard from './components/HeroCard';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [heroId, setHeroId] = useState(222); // Default hero ID

  return (
    <div className='bg-indigo-950 h-full w-full absolute flex justify-center items-center flex-col gap-4 p-4'>
      <Search setHeroId={setHeroId} />
      <HeroCard heroId={heroId} />
    </div>
  );
}

export default App;
