import "./comic-details.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ComicDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comic/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <>2sec</>
  ) : (
    <>
      <div>HELLO {data.title}</div>
    </>
  );
};

export default ComicDetails;
