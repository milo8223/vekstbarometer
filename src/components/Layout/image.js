import Aux from "../../hoc/ax";

const Image = (props) => (
  <Aux>
    <img src={props.path} alt={props.text} />
  </Aux>
);

export default Image;