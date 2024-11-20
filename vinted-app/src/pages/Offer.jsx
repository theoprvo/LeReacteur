import { useParams } from "react-router-dom";

const Offfer = () => {
  const { id } = useParams();

  return <div>Page Offer and id is : {id}</div>;
};

export default Offfer;
