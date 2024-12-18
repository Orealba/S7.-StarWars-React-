import { StarshipCard } from '../Components/StarshipCard';
import bgImage from '../assets/images/bg.webp';

export const Starships = () => {
  return (
    <div 
      className="min-h-screen w-full bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'contain',
        backgroundColor: '#111827'
      }}
    >
      <div className="flex flex-col items-start justify-start">
        <StarshipCard />
      </div>
      
      <button
        type="button"
        className="px-12 py-4 mt-20 text-lg font-bold text-white bg-black border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300">
        VER MÁS
      </button>
    </div>
  );
};
