import { ShipInfoCard } from '../Components/ShipInfoCard';
import { useParams } from 'react-router-dom';

import { useShipsInfoContext } from '../Context/ShipsInfoContext';
import bgInfo from '../assets/images/BgInfo.jpg';
import { useEffect } from 'react';
import { PilotCard } from '../Components/PilotCard';
import { MovieCard } from '../Components/MovieCard';

export const ShipFile = () => {
  const { id } = useParams<{ id: string }>();
  const { starship, pilots, films, fetchStarshipById } = useShipsInfoContext();

  useEffect(() => {
    if (id) {
      fetchStarshipById(Number(id));
    }
  }, [id]);

  return (
    <>
      <div className=" overflow-y-auto ">
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
            height: '150dvh',
          }}>
          <div className="pl-8 mt-0 ">
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mb-4">
                NAVES
              </h5>

              {starship ? (
                <ShipInfoCard starship={starship} />
              ) : (
                <div>No hay información de la nave disponible.</div>
              )}
            </div>
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mt-4 ">
                PILOTOS
              </h5>
              <div className="flex justify-between m-6">
                {pilots.length > 0 ? (
                  pilots.map(
                    (pilot) =>
                      starship && (
                        <PilotCard
                          key={pilot.id}
                          pilot={pilot}
                          starship={starship}
                        />
                      ),
                  )
                ) : (
                  <div>No hay pilotos disponibles.</div>
                )}
              </div>
            </div>
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mt-4 ">
                PELICULAS
              </h5>
              <div className="flex justify-between m-5 ">
                {films.length > 0 ? (
                  films.map((film) => (
                    <MovieCard
                      key={film.id}
                      film={film}
                    />
                  ))
                ) : (
                  <div>No hay películas disponibles.</div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
