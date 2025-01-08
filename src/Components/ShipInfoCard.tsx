import { Link } from 'react-router-dom';

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  length: string;
  crew: string;
}

export const ShipInfoCard: React.FC<{ starship: Starship }> = ({
  starship,
}) => {
  return (
    <div style={{ fontFamily: 'Aldrich' }}>
      <Link
        to={`/ships/${starship.name}/info`}
        className="block 
            w-[1000px] sm:w-[400px] md:w-[800px] lg:w-[900px] xl:w-[1500px] 
            h-[100px] sm:h-[80px] md:h-[230px] 
            p-3 sm:p-4 md:p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow 
            text-left
            mx-auto"
        style={{ cursor: 'default' }}>
        <div className="flex flex-col justify-between  leading-normal">
          <h4 className="mb-4 text-3xl font-bold tracking-tight text-gray-400 ">
            {starship.name}
          </h4>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h6 className="mb-3 text-xl tracking-tight text-gray-400  mr-5">
              Modelo: {starship.model}
            </h6>

            <h6 className="mb-3 text-xl tracking-tight text-gray-400 mr-5">
              Costo en créditos: {starship.cost_in_credits}
            </h6>

            <h6 className="mb-3 text-xl tracking-tight text-gray-400  mr-5">
              Velocidad atmosférica: {starship.max_atmosphering_speed}
            </h6>
          </div>

          <div className="flex flex-col">
            <h6 className="mb-3 text-xl tracking-tight text-gray-400 ">
              Manufactura: {starship.manufacturer}
            </h6>

            <h6 className="mb-3 text-xl tracking-tight text-gray-400 ">
              Largo: {starship.length}
            </h6>
            <h6 className="mb-3 text-xl tracking-tight text-gray-400 ">
              Tripulación: {starship.crew}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};
