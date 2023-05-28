import React from "react";

import Aux from "../../hoc/Ux";

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