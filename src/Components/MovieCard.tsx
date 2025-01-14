import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface Film {
  id: number;
  title: string;
}

export const MovieCard: React.FC<{ film: Film }> = ({ film }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`, 
        );
        if (response.ok) {
          setImageUrl(response.url); 
        } else {
          console.error('Error fetching image:', response.status);
          setImageError(true); 
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageError(true); 
      }
    };

    fetchImage();
  }, [film.id]);

  return (
    <div
      className="container"
      style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/films/${film.id}`}
        className="block
           w-[400px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[300px]
            h-[80px] sm:h-[60px] md:h-[410px]
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow
            text-left
            mx-auto"
        style={{ cursor: 'default' }}>
        <div>
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={film.title}
              className="max-w-65" 
            />
          ) : (
            //AQUI DEBES HACER LO DE LA IMAGEN SI NO APARECE PONER OTRA GENÉRICA
            <div className="bg-gray-700 h-full flex items-center justify-center">
              <span className="text-gray-400">Imagen no disponible</span>{' '}
              {/* Mensaje alternativo */}
            </div>
          )}
          <h4 className="flex justify-center text-md font-bold text-gray-400 mt-2">
            {film.title}
          </h4>
        </div>
      </Link>
    </div>
  );
};
