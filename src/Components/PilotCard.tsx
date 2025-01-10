import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface Pilot {
  id: number;
  name: string;
}
interface Starship {
  id: number;
  name: string;
}

export const PilotCard: React.FC<{ pilot: Pilot; starship: Starship }> = ({
  pilot,
  starship,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://starwars-visualguide.com/assets/img/characters/${pilot.id}.jpg`, // Asegúrate de que esto sea correcto
        );
        if (response.ok) {
          setImageUrl(response.url); // Establece la URL de la imagen
        } else {
          console.error('Error fetching image:', response.status);
          setImageError(true); // Marca que hubo un error al cargar la imagen
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageError(true); // Marca que hubo un error al cargar la imagen
      }
    };

    fetchImage();
  }, [pilot.id]);

  return (
    <div
      className=" container"
      style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/pilots/${pilot.id}`}
        className="block
            w-[400px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[210px]
            h-[80px] sm:h-[60px] md:h-[280px]
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow
            text-left
            mx-auto "
        style={{ cursor: 'default' }}>
        <div className=" ">
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={pilot.name}
              className="max-w-40"
            />
          ) : (
            <div>
              <span className="text-gray-400">Imagen no disponible</span>{' '}
              {/* Mensaje alternativo */}
            </div>
          )}

          <h4 className="flex justify-center text-md font-bold text-gray-400 mt-2">
            {pilot.name}
          </h4>
        </div>
      </Link>
    </div>
  );
};
