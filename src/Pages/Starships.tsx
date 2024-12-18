import { StarshipCard } from '../Components/StarshipCard';
import bgImage from '../assets/images/bg.webp';

export const Starships = () => {
  return (
    <div>
      <main
        style={{
          position: 'fixed',
          top: 130,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',

          flexDirection: 'column',
        }}>
        <div className="flex justify-start mt-0 ">
          <h1 className="text-white text-7xl mb-16 font-bold ml-5 mt-20">
            STARSHIPS
          </h1>
        </div>

        <div className="flex-1 flex flex-col mt-12 items-center justify-center gap-8">
          <StarshipCard />

          <button
            type="button"
            className=" px-12 py-4 text-lg font-bold text-white bg-black border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300">
            VER MÁS
          </button>
        </div>
      </main>
    </div>
  );
};
