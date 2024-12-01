import "./character-details.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComicsRelated from "../../components/comics-related/ComicsRelated";

const CharacterDetails = ({ token }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataFavorite, setDataFavorite] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //DATA OF CHARACTER
      const response = await axios.get(`http://localhost:3000/comics/${id}`);
      setData(response.data);
      //DATA OF FAVORITES OF USER
      const responseFavorite = await axios.get(
        `http://localhost:3000/favorites/${token}`
      );
      setDataFavorite(responseFavorite.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id, token]);

  const addFavorite = async () => {
    await axios.post(`http://localhost:3000/favorite`, {
      token: token,
      type: "character",
      marvelId: id,
    });
  };
  // const removeFavorite = async () => {
  //   await axios.delete(`http://localhost:3000/favorite/${data3._id}`);
  // };

  return isLoading ? (
    <>2sec</>
  ) : (
    <>
      {/* {dataFavorite.map((item) => {
        data._id === item._id
          ? setDataFavorite(item)
          : setDataFavorite({ notFavorite: true });
      })} */}
      <section className="container">
        <div className="page-detail">
          <div className="page-detail-image-container">
            <img
              src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`}
              alt={`${data.name}-img`}
            />
          </div>
          <div className="page-detail-text-container">
            <div className="headline">
              <h1>{data.name}</h1>
              {console.log(data)}
              {console.log(dataFavorite)}
              <button onClick={addFavorite}>Add to favorites</button>
              {/* <button onClick={removeFavorite}>Remove from favorites</button> */}
            </div>
            {data.description ? (
              <p>{data.description}</p>
            ) : (
              <p>No description</p>
            )}
          </div>
        </div>

        <div className="appearance-detail">
          {/* {console.log(data)} */}
          {/* {console.log(data2)} */}
          {data.comics.map((item, index) => {
            return (
              <ComicsRelated
                key={index}
                name={item.title}
                img_url={item.thumbnail.path}
                img_extension={item.thumbnail.extension}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CharacterDetails;