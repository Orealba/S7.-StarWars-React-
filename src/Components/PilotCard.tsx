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
          `https://starwars-visualguide.com/assets/img/character/${pilot.id}.jpg`, // Cambiado a pilot.id
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
    <div style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/pilots/${pilot.id}`}
        className="block
            w-[400px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[400px]
            h-[80px] sm:h-[60px] md:h-[230px]
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow
            text-left
            mx-auto"
        style={{ cursor: 'default' }}>
        <div className=" ">
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={pilot.name}
              className="max-w-80"
            />
          ) : (
            <div className="bg-gray-700 h-full flex items-center justify-center">
              <span className="text-gray-400">Imagen no disponible</span>{' '}
              {/* Mensaje alternativo */}
            </div>
          )}
        </div>
        <div className="">
          <h4 className="text-xl font-bold text-gray-400">{pilot.name}</h4>
        </div>
      </Link>
    </div>
  );
};
