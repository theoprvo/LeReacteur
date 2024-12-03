import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterFavorite from "../../components/character-favorite/CharacterFavorite";
import ComicFavorite from "../../components/comic-favorite/ComicFavorite";

const Home = ({ token }) => {
  const [dataUser, setDataUser] = useState({});
  const [dataFavorites, setDataFavorites] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const responseUser = await axios.get(
        `http://localhost:3000/user/${token}`
      );
      setDataUser(responseUser.data);
      const responseFavorites = await axios.get(
        `http://localhost:3000/favorites/${token}`
      );
      setDataFavorites(responseFavorites.data); //array with favorites

      setIsLoading(false);
    };
    fetchData();
  }, [token]);

  if (token) {
    return isLoading ? (
      <div>chargement</div>
    ) : (
      <div>
        <div className="hero">
          <div className="hero-mask"></div>
          <h1>WELCOME {dataUser.account.username}</h1>
        </div>
        <div className="favorites characters">
          <h2>Your Favorites characters</h2>
          {dataFavorites.map((item) => {
            if (item.type === "character") {
              return (
                <CharacterFavorite
                  key={item._id}
                  id={item.marvelId}
                  token={token}
                />
              );
            }
          })}
        </div>
        <div className="favorites comics">
          <h2>Your Favorites comics</h2>
          {dataFavorites.map((item) => {
            if (item.type === "comic") {
              return (
                <ComicFavorite
                  key={item._id}
                  id={item.marvelId}
                  token={token}
                />
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div>Non nonnceté</div>;
  }
};

export default Home;
