import { useEffect, useState } from "react";
import "./characters.css";
import axios from "axios";
import CharacterCard from "../../components/character-card/CharacterCard";
import { useParams } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [research, setResearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let { limit } = useParams();

  if (!limit) {
    limit = 20;
  }
  limit = Number(limit);
  let filter = String(research);
  let page = Number(currentPage);

  console.log("page =>", page);
  console.log("limit =>", limit);
  console.log("skip =>", (page - 1) * limit);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/characters/${limit}/${
          (page - 1) * limit
        }/${filter}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page, limit, filter]);

  return isLoading ? (
    <>2sec</>
  ) : (
    <>
      <div className="">
        <div className="search">
          <input
            onChange={(event) => {
              setResearch(event.target.value);
              setCurrentPage(1);
            }}
            type="text"
            placeholder="SEARCH A CHARACTER"
          />
        </div>
        <section className="container">
          <h1 className="roboto-black">CHARACTERS</h1>
          <div className="controls">
            <button
              onClick={() => {
                if (page > 1) {
                  setCurrentPage(page - 1);
                }
                console.log(page);
              }}
            >
              &lt;
            </button>
            <p>{page}</p>
            <button
              onClick={() => {
                setCurrentPage(page + 1);

                console.log(page);
              }}
            >
              &gt;
            </button>
          </div>
          <div className="items-container">
            {data.results.map((item) => {
              return (
                <CharacterCard
                  key={item._id}
                  _id={item._id}
                  name={item.name}
                  img_url={item.thumbnail.path}
                  img_extension={item.thumbnail.extension}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Characters;
