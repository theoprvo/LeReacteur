import "./comic-card.css";
import { Link } from "react-router-dom";

const ComicCard = (props) => {
  return (
    <>
      <Link to={`/comic/${props._id}`} className="character-card">
        <div>
          <div>
            <img
              src={`${props.img_url}/portrait_xlarge.${props.img_extension}`}
              alt={`${props.name}-image`}
            />
          </div>
          <div>
            <div>{props.name}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ComicCard;
