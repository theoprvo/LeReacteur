import axios from "axios";
import { useState, useEffect } from "react";

const PokemonCard = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.request);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>...</div>
  ) : (
    <div>
      <div className="pokemon-card">
        <span>{props.name}</span>
        <img src={data.sprites.front_default} alt="" />
      </div>
    </div>
  );
};

export default PokemonCard;
