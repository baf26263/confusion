import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuperheroPage: React.FC = () => {
  interface SuperheroData {
    id: string;
    name: string;
    image: {
      url: string;
    };
    biography: {
      'full-name': string;
      'alter-egos': string;
    };
    // Add more properties as needed
  }

  const [superheroes, setSuperheroes] = useState<SuperheroData[]>([]);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await axios.get(`https://superheroapi.com/api/${import.meta.env.VITE_SUPERHERO_API_ACCESS_TOKEN}/id`);
        setSuperheroes(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSuperheroes();
  }, []);

  return (
    <div>
      {superheroes.map((superhero) => (
        <div key={superhero.id} className="card">
          <img src={superhero.image.url} alt={superhero.name} />
          <h2>{superhero.name}</h2>
          <p>Full Name: {superhero.biography['full-name']}</p>
          <p>Alter Ego: {superhero.biography['alter-egos']}</p>
          {/* Add more information as needed */}
        </div>
      ))}
    </div>
  );
};

export default SuperheroPage;
