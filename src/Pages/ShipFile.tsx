import { ShipInfoCard } from '../Components/ShipInfoCard';
import { useParams } from 'react-router-dom';
// import { Film } from '../Components/Film'; // Asegúrate de tener un componente para mostrar films
import { useShipsInfoContext } from '../Context/ShipsInfoContext'; // Asegúrate de importar el nuevo contexto
import bgInfo from '../assets/images/BgInfo.jpg';
import { useEffect } from 'react';

export const ShipFile = () => {
  const { id } = useParams<{ id: string }>(); // Cambia 'name' a 'id'
  const {
    starship,
    pilots,
    films,
    fetchStarshipById,
    fetchPilots,
    fetchFilms,
  } = useShipsInfoContext();

  useEffect(() => {
    if (id) {
      fetchStarshipById(Number(id)); // Llama a la función con el ID de la nave
      // fetchPilots(); // Opcional: si quieres cargar los pilotos
      // fetchFilms(); // Opcional: si quieres cargar los films
    }
  }, [id]);

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
              {/* Aquí puedes mapear y mostrar los pilotos */}
            </div>
            <div>
              <h5 className="flex justify-start border-y-2 border-gray-400 pl-8 mt-4">
                FILMS
              </h5>
              {/* Aquí puedes mapear y mostrar los films */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
