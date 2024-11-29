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
  }, [id]);

  return isLoading ? (
    <div>chargement</div>
  ) : (
    <div className="offer">
      <div className="offer-pictures">
        {console.log(data.product_pictures[0].url)}
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
          {data.product_details.map((item, index) => {
            return (
              <div key={index} className="offer-details-list__item">
                {item["MARQUE"] ? (
                  <>
                    <div>MARQUE</div>
                    <div>{item["MARQUE"]}</div>
                  </>
                ) : (
                  <>
                    <div>MARQUE</div>
                    <div>N/A</div>
                  </>
                )}
                {item["ÉTAT"] ? (
                  <>
                    <div>ÉTAT</div>
                    <div>{item["ÉTAT"]}</div>
                  </>
                ) : (
                  <>
                    <div>ÉTAT</div>
                    <div>N/A</div>
                  </>
                )}
                {item["COULEUR"] ? (
                  <>
                    <div>COULEUR</div>
                    <div>{item["COULEUR"]}</div>
                  </>
                ) : (
                  <>
                    <div>COULEUR</div>
                    <div>N/A</div>
                  </>
                )}
                {item["EMPLACEMENT"] ? (
                  <>
                    <div>LOCALISATION</div>
                    <div>{item["EMPLACEMENT"]}</div>
                  </>
                ) : (
                  <>
                    <div>LOCALISATION</div>
                    <div>N/A</div>
                  </>
                )}
                {item["MODES DE PAIEMENT"] ? (
                  <>
                    <div>OPTIONS DE PAIEMENT</div>
                    <div>{item["MODES DE PAIEMENT"]}</div>
                  </>
                ) : (
                  <>
                    <div>OPTIONS DE PAIEMENT</div>
                    <div>N/A</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offfer;
