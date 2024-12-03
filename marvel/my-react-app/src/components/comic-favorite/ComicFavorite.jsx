import axios from "axios";
import { useState, useEffect } from "react";

const ComicFavorite = ({ id, token }) => {
  const [data, setData] = useState({});
  const [dataFavorite, setDataFavorite] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //DATA OF COMIC
      const response = await axios.get(`http://localhost:3000/comic/${id}`);
      setData(response.data);
      //DATA OF FAVORITES OF USER
      const responseFavoriteCheck = await axios.get(
        `http://localhost:3000/favorite/check`,
        { params: { userToken: token, marvelId: id } }
      );
      setDataFavorite({ ...responseFavoriteCheck.data });
      setIsLoading(false);
    };
    fetchData();
  }, [id, token]);

  const removeFavorite = async () => {
    await axios.delete(
      `http://localhost:3000/favorite/${dataFavorite.favoriteId}`
    );
    setDataFavorite({ isFavorite: false });
    console.log(dataFavorite);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      {console.log(data, dataFavorite.isFavorite)}
      {dataFavorite.isFavorite === true && (
        <div>
          <div className="container-item-card hover-effect-character-card">
            <div className="character-card">
              <div>
                <img
                  className="item-img"
                  src={`${data.thumbnail.path}/standard_incredible.${data.thumbnail.extension}`}
                  alt={`${data.title}-image`}
                />
              </div>
              <div className="item-txt">{data.title}</div>
            </div>
          </div>
          <button
            onClick={async () => {
              await removeFavorite();
            }}
          >
            Remove from favorites
          </button>
        </div>
      )}
    </>
  );
};

export default ComicFavorite;
