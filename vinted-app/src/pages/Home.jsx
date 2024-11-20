import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import Item from "../components/item/Item";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
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
    <span>La page charge</span>
  ) : (
    <>
      <section className="home-section-1">
        <div>
          <div className="toto">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <button>Commencer à vendre</button>
          </div>
        </div>
      </section>

      <section className="home-section-2">
        {data.offers.map((item) => {
          console.log(item);

          return (
            <Item
              key={item._id}
              image={item.product_image.secure_url}
              username={item.owner.account.username}
              brand={item.product_details[0].MARQUE}
              size={item.product_details[1].TAILLE}
              price={item.product_price}
              item_id={item._id}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;
