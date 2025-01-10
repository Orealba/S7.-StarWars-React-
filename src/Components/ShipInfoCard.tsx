import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  pilots: string[];
}

export const ShipInfoCard: React.FC<{ starship: Starship }> = ({
  starship,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`,
        );
        if (response.ok) {
          setImageUrl(response.url); // Establece la URL de la imagen
        } else {
          console.error('Error fetching image:', response.status);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [starship.id]);

  return (
    <div style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/ships/${starship.id}/info`}
        className="block 
            w-[1000px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[1400px] 
            h-[100px] sm:h-[80px] md:h-[255px] 
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow 
            text-left
            mx-auto"
        style={{ cursor: 'default' }}>
        <div className="flex">
          <div className="w-1/3 ">
           
            {imageUrl && (
              <img
                src={imageUrl}
                alt={starship.name}
                className="max-w-80"
              />
            )}
          </div>
          <div className="w-1/2 pl-2">
            {' '}
            {/* Columna para el título y otros datos, ajustando el padding izquierdo */}
            <h4 className="text-2xl mb-5 font-bold text-gray-400">{starship.name}</h4>
            <div className="flex ">
              <div className="flex flex-col w-1/2">
                {' '}
                {/* Columna izquierda para datos */}
                <h6 className="mb-3 text-md tracking-tight text-gray-400">
                  Modelo: {starship.model}
                </h6>
                <h6 className="mb-3 text-md tracking-tight text-gray-400">
                  Costo en créditos: {starship.cost_in_credits}
                </h6>
                <h6 className="mb-3 text-md tracking-tight text-gray-400">
                  Velocidad atmosférica: {starship.max_atmosphering_speed}
                </h6>
              </div>
              <div className="flex flex-col w-1/2">
                {' '}
                {/* Columna derecha para datos */}
                <h6 className="mb-3 text-md tracking-tight text-gray-400">
                  Manufactura: {starship.manufacturer}
                </h6>
                <h6 className="mb-3 text-md tracking-tight text-gray-400">
                  Largo: {starship.length}
                </h6>
                <h6 className="mb-3 text-md tracking-tight text-gray-400">
                  Tripulación: {starship.crew}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
