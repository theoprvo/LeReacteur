import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Typechart = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
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
    <ul className="pokemon-types">
      {console.log(data.results)}
      {data.results.map((item, index) => {
        return (
          <Link key={index} to={"/typechart/" + item.name}>
            <li>{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Typechart;
