import { useState } from 'react';
import './index.css';
import HeroCard from './components/HeroCard';

function App() {
  return (
    <>
      <div className='text-2xl text-red-500'>Superhero</div>
      <HeroCard heroId={70} />
    </>
  );
}

export default App;
