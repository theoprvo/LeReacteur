import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./offer.css";

const Offfer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id
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
    <div>chargement</div>
  ) : (
    <div className="offer">
      <div className="offer-pictures">
        <img src={data.product_pictures[0].url} alt="" />
      </div>
      <div className="offer-details">
        <div className="offer-details-main">
          <div>{data.product_name}</div>
          <div>
            <span style={{ color: "blue" }}>
              {data.product_details[2].ÉTAT}
            </span>
            <span> - </span>
            <span style={{ color: "red" }}>
              {data.product_details[0].MARQUE}
            </span>
          </div>
        </div>
        <div className="offer-details-price">
          <p>{data.product_price} €</p>
        </div>
        <div className="offer-details-list">
          <div className="offer-details-list__item">
            <div>MARQUE</div>
            <div>{data.product_details[0]["MARQUE"]}</div>
          </div>
          <div className="offer-details-list__item">
            <div>ÉTAT</div>
            <div>{data.product_details[2]["ÉTAT"]}</div>
          </div>
          <div className="offer-details-list__item">
            <div>COULEUR</div>
            <div>{data.product_details[3]["COULEUR"]}</div>
          </div>
          <div className="offer-details-list__item">
            <div>LOCALISATION</div>
            <div>{data.product_details[4]["EMPLACEMENT"]}</div>
          </div>
          <div className="offer-details-list__item">
            <div>MODES DE PAIEMENT</div>
            <div>{data.product_details[5]["MODE DE PAIEMENT"]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offfer;
