import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const TypechartSingle = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/type/" + id
        );
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
      {data.pokemon.map((item, index) => {
        return (
          <PokemonCard
            key={index}
            name={item.pokemon.name}
            request={item.pokemon.url}
          />
        );
      })}
    </div>
  );
};

export default TypechartSingle;
