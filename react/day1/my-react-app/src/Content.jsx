import Title from "./Title";
import Description from "./Description";

function Content(props) {
  return (
    <div>
      <Title name={props.name} />
      <Description text={props.description} />
    </div>
  );
}

export default Content;
