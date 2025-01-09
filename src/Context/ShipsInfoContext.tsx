import React, { createContext, useContext, useState } from 'react';

interface Pilot {
  id: number;
  name: string;
  // Agrega más propiedades según la API de pilotos
}

interface Film {
  id: number;
  title: string;
  // Agrega más propiedades según la API de películas
}

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

interface ShipsInfoContextType {
  starship: Starship | null;
  pilots: Pilot[];
  films: Film[];
  fetchStarshipById: (id: number) => Promise<void>;
  fetchPilots: () => Promise<void>;
  fetchFilms: () => Promise<void>;
}

const ShipsInfoContext = createContext<ShipsInfoContextType | undefined>(
  undefined,
);

export const ShipsInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [starship, setStarship] = useState<Starship | null>(null);
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [films, setFilms] = useState<Film[]>([]);

  const fetchStarshipById = async (id: number) => {
    try {
      const response = await fetch(
        `https://swapi.orealbasoriano.com/api/starships/${id}`,
      );
      const data = await response.json();
      setStarship(data); // Asegúrate de que esto coincida con la estructura de tu API
    } catch (error) {
      console.error('Error fetching starship by ID:', error);
    }
  };

  const fetchPilots = async (id: number) => {
    try {
      const response = await fetch(
        `https://swapi.orealbasoriano.com/api/pilots/${id}`,
      ); // Cambia la URL según tu API
      const data = await response.json();
      setPilots(data.data); // Asegúrate de que esto coincida con la estructura de tu API
    } catch (error) {
      console.error('Error fetching pilots:', error);
    }
  };

  const fetchFilms = async (id: number) => {
    try {
      const response = await fetch(
        `https://swapi.orealbasoriano.com/api/films/${id}`,
      ); // Cambia la URL según tu API
      const data = await response.json();
      setFilms(data.data); // Asegúrate de que esto coincida con la estructura de tu API
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  };

  return (
    <ShipsInfoContext.Provider
      value={{
        starship,
        pilots,
        films,
        fetchStarshipById,
        fetchPilots,
        fetchFilms,
      }}>
      {children}
    </ShipsInfoContext.Provider>
  );
};

export const useShipsInfoContext = () => {
  const context = useContext(ShipsInfoContext);
  if (!context) {
    throw new Error(
      'useShipsInfoContext must be used within a ShipsInfoProvider',
    );
  }
  return context;
};
