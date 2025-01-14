import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Yoda from '../assets/images/Yoda.webp';

interface Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: number;
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
          setImageUrl(response.url);
        } else {
          console.error('Error fetching image:', response.status);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [starship.id]);
  if (!starship) {
    return <div>No hay información de la nave disponible.</div>;
  }

  return (
    <div style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/ships/${starship.id}/info`}
        className="block 
            w-[20rem] sm:w-[10rem] md:w-[60rem] lg:w-[58rem] xl:w-[87.5rem] 
            h-[35rem] sm:h-[5rem] md:h-[16rem] 
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow 
            text-left
            mx-auto hover:text-inherit"
        style={{ cursor: 'default' }}>
        <div className="flex">
          <div className="w-1/3 ">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={starship.name}
                className="max-w-[10rem] sm:max-w-[12rem] md:max-w-[16rem] lg:max-w-[1rem] xl:max-w-[18rem]"
              />
            ) : (
              <div className="">
                <div className="flex justify-center">
                  <img
                    src={Yoda}
                    alt="Imagen genérica"
                    className=" max-w-[8rem] sm:max-w-[14rem] "
                  />
                </div>

                <p className="flex justify-center ">
                  Podria haber la direccion de la imagen,<br></br> pero no la
                  imagen como tal.
                </p>
              </div>
            )}
          </div>

          <div className="w-1/2 pl-2">
            <h4 className="text-2xl mb-5 font-bold text-gray-400">
              {starship.name}
            </h4>
            <div className="flex ">
              <div className="flex flex-col w-1/2">
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
