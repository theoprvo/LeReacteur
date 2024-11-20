import { Link } from "react-router-dom";
import "./item.css";

const Item = (props) => {
  return (
    <>
      <div className="item-div">
        <div>
          <Link to={"/offers/" + props.item_id}>
            <p>{props.username}</p>
            <img src={props.image} alt="" />
            <p>{props.price} €</p>
            <p>{props.size}</p>
            <p>{props.brand}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
