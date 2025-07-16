import { useState } from 'react';
import './index.css';
import HeroCard from './components/HeroCard';

function App() {
  return (
    <>
      <div className='bg-indigo-950 h-full w-full absolute flex justify-center items-center'>
        <HeroCard heroId={643} />
      </div>
    </>
  );
}

export default App;
