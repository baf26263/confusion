import { useState, useEffect } from 'react';

interface Hero {
  id: string;
  name: string; 
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  }
}

function isHeroArray(data: any): data is Hero[] {
  return Array.isArray(data);
}

function SuperheroPage() {

  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    async function fetchHeroes() {
      const response = await fetch('https://superheroapi.com/api/6614556608606697/id');
      const json = await response.json();
      
      if(isHeroArray(json)) {
        setHeroes(json);
      } else {
        setHeroes([]);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <div>
      {heroes.map((hero, index) => (
        <div key={index}>
          <h2>{hero.name}</h2>
          // display hero 
        </div>
      ))}
    </div>
  );
}

export default SuperheroPage;

