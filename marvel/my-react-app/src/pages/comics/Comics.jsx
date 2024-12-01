// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./comics.css";
import axios from "axios";
import ComicCard from "../../components/comic-card/ComicCard";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comics`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <>2sec</>
  ) : (
    <>
      <div>
        <div>
          <input type="text" placeholder="SEARCH A COMIC" />
        </div>
        <div>
          <div>COMICS</div>
          <div className="items-container">
            {data.results.map((item) => {
              return (
                <ComicCard
                  key={item._id}
                  _id={item._id}
                  name={item.title}
                  img_url={item.thumbnail.path}
                  img_extension={item.thumbnail.extension}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comics;
