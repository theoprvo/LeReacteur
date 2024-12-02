import axios from "axios";
import { useEffect, useState } from "react";

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
        {console.log(dataUser)}
        {/* {console.log(dataFavorites)} */}

        <h1>Bonjour {dataUser.account.username} !</h1>

        <div className="favorites">
          {dataFavorites.map((item, index) => {
            return (
              <div key={index}>
                {item.type} + {item.marvelId}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Non nonnceté</div>;
  }
};

export default Home;
