import "./comics-related.css";
import { Link } from "react-router-dom";

const ComicsRelated = (props) => {
  return (
    <>
      <div className="container-item-card">
        <Link to="/" className="character-card">
          <h2>{props.name}</h2>
          <img
            src={`${props.img_url}/portrait_incredible.${props.img_extension}`}
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default ComicsRelated;
