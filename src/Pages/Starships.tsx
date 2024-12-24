import { StarshipCard } from '../Components/StarshipCard';
import bgImage from '../assets/images/bg.webp';

export const Starships = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <main
        style={{
          position: 'fixed',
          top: 170,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}>
        <div className="">
          <div className="flex justify-start mt-0">
            <h1 className="text-white text-5xl sm:text-xl md:text-xl lg:text-6xl mb-16 font-bold ml-16 mt-20 font-['Star_Jedi']">
              Starships
            </h1>
          </div>

          <div className="px-12 flex flex-col items-center">
            <StarshipCard />

            <div className="flex justify-center mt-8 mb-8">
              <button
                type="button"
                className="px-12 py-4 text-lg font-bold text-white bg-black border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 font-['Star_Jedi']">
                Cargar más
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
