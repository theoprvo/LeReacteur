import axios from "axios";
import { useState, useEffect } from "react";

import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Pokedex = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Veuillez patienter</div>
  ) : (
    <div className="pokemon-container">
      {console.log(data.results)}
      {data.results.map((item, index) => {
        return <PokemonCard key={index} request={item.url} name={item.name} />;
      })}
    </div>
  );
};

export default Pokedex;
