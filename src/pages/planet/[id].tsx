import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

type planetType = {
  name: string,
  climate: string,
  terrain: string,
  population: string
}

const Formulario = () => {
  const router = useRouter();
  const {id} = router.query;
  const [planet, setPlanet] = useState(null);

const fetchData = async() =>{
      if(id){
        try{
          const planets = await fetch(`https://swapi.dev/api/planets/${id}`);
          const data = await planets.json();
          setPlanet(data);
          console.log(planet);
      }catch(e){
        
      } 
    } 
    };


  useEffect(() => {
    fetchData();
  }, [id])

  if(planet === null){
    return <>loading data...</>
  }
  
  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
}

export default Formulario;