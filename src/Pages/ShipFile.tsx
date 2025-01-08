import { ShipInfoCard } from '../Components/ShipInfoCard';
import { useParams } from 'react-router-dom';
import { PilotCard } from '../Components/PilotCard';
import { MovieCard } from '../Components/MovieCard';
import bgInfo from '../assets/images/BgInfo.jpg';
import { useStarshipContext } from '../Context/StarshipsContext';

export const ShipFile = () => {
  const { name } = useParams<{ name: string }>();
  const { starships } = useStarshipContext();
  const starship = starships.find((s) => s.name === name);

  return (
    <>
      <div className="h-screen overflow-y-auto">
        <main
          style={{
            position: 'absolute',
            top: 200,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgInfo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}>
          <div className="pl-8">
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mb-4">
                STARSHIP
              </h5>

              {starship ? (
                <ShipInfoCard starship={starship} /> // Pasa el objeto starship completo
              ) : (
                <div>No hay información de la nave disponible.</div>
              )}
            </div>
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mt-4 ">
                PILOTS
              </h5>
              <PilotCard />
            </div>
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mt-4">
                MOVIES
              </h5>
              <MovieCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
