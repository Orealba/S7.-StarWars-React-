import { useStarshipContext } from '../Context/StarshipsContext';

export const ShipInfoCard: React.FC<{
  name: string;
}> = ({ name }) => {
  const { starships } = useStarshipContext();

  // Buscar la nave en el contexto
  const starship = starships.find((s) => s.name === name);

  // Manejo de caso cuando no se encuentra la nave
  if (!starship) {
    return <div>No hay información de la nave disponible.</div>;
  }

  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nombre: {starship.name}
          </h4>
          <div className="flex">
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Modelo: {starship.model}
            </h6>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manofactura: {starship.manufacturer}
            </h6>
          </div>
          <div className="flex">
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Costo en créditos: {starship.cost_in_credits}
            </h6>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Largo: {starship.length}
            </h6>
          </div>
          <div className="flex">
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Velocidad atmosférica: {starship.max_atmosphering_speed}
            </h6>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tripulación: {starship.crew}
            </h6>
          </div>
        </div>
      </a>
    </div>
  );
};
