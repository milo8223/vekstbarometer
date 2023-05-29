import Aux from "../../hoc/ax";

const layout = (props) => (
  <Aux>
    <div>
      Toolbar and all
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;