import './index.css';
import HeroCard from './components/HeroCard';
import Search from './components/Search';

function App() {
  return (
    <>
      <div className='bg-indigo-950 h-full w-full absolute flex justify-center items-center'>
        <Search />
        <HeroCard heroId={222} />
      </div>
    </>
  );
}

export default App;
