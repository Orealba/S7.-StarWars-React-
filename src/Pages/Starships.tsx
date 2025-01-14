import { StarshipCard } from '../Components/StarshipCard';
import bgImage from '../assets/images/bg.webp';
import { useStarshipContext } from '../Context/StarshipsContext';
import { useState } from 'react';

interface Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: number; // Cambia a number si es necesario
  max_atmosphering_speed: string;
  crew: string;
  pilots: string[];
}
export const Starships = () => {
  return <StarshipContent />;
};

const StarshipContent = () => {
  const { starships, loadMore, allLoaded } = useStarshipContext();
  const [showMore, setShowMore] = useState(true);

  const handleLoadMore = async () => {
    await loadMore();
    if (allLoaded) {
      setShowMore(false);
    }
  };
  return (
    <div className="h-screen overflow-y-auto">
      <main
        style={{
          position: 'absolute',
          top: 170,
          left: 0,
          right: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}>
        <div>
          <div className="flex justify-start mt-0">
            <h1 className="text-white text-5xl sm:text-xl md:text-xl lg:text-6xl mb-16 font-bold ml-16 mt-20 font-['Star_Jedi']">
              Starships
            </h1>
          </div>

          <div className="px-12 flex flex-col items-center">
            {starships.length === 0 ? (
              <div>No hay naves disponibles.</div>
            ) : (
              starships.map((starship) => (
                <StarshipCard
                  key={starship.name}
                  starship={starship}
                />
              ))
            )}
            {showMore && !allLoaded && (
              <div className="flex justify-center mt-8 mb-8">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="px-12 py-4 text-lg font-bold text-white bg-black border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 font-['Star_Jedi']">
                  Cargar más
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
