import React, { createContext, useContext, useEffect, useState } from 'react';

interface StarshipContextType {
  starships: Starship[];
  fetchStarships: (url?: string) => Promise<void>;
  loadMore: () => Promise<void>;
  allLoaded: boolean;
}
interface Starship {
  name: string;
  model: string;
}
interface StarshipContextType {
  starships: Starship[];

  loadMore: () => Promise<void>;
}

const StarshipContext = createContext<StarshipContextType | undefined>(
  undefined,
);

export const StarshipProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    'https://swapi.py4e.com/api/starships/',
  );
  const [allLoaded, setAllLoaded] = useState(false);

  const fetchStarships = async (url: string = nextUrl!) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueStarships = data.results.filter(
        (starship: Starship) =>
          !starships.some(
            (existingStarship) => existingStarship.name === starship.name,
          ),
      );

      setStarships((prevStarships) => [...prevStarships, ...uniqueStarships]);
      setNextUrl(data.next);

      if (!data.next) {
        setAllLoaded(true);
      }
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
  };

  const loadMore = async () => {
    if (nextUrl) {
      await fetchStarships(nextUrl);
    }
  };

  useEffect(() => {
    const loadInitialStarships = async () => {
      await fetchStarships(); // Cargar las naves iniciales
    };

    loadInitialStarships();
  }, []);

  return (
    <StarshipContext.Provider
      value={{ starships, fetchStarships, loadMore, allLoaded }}>
      {children}
    </StarshipContext.Provider>
  );
};

export const useStarshipContext = () => {
  const context = useContext(StarshipContext);
  if (!context) {
    throw new Error(
      'useStarshipContext must be used within a StarshipProvider',
    );
  }
  return context;
};
