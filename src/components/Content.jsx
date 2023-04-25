import Title from "../components/Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <section className="rectangle">
      <Title name={props.name} />
      <Description text={props.text} />
    </section>
  );
};

export default Content;
