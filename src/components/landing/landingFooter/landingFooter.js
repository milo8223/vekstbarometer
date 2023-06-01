import React from "react";
import Aux from "../../../hoc/ax";
import Image from "../../Layout/image";
import StyledBox from "./styledBox";
import ActionButton from "./actionButton";

const LandingFooter = () => {
  return (
    <Aux>
      <StyledBox>
        <Image
          path={require('../../../assets/images/landingBgFooter.jpg')}
          rounded="26px 26px 0 0"
          text="USN Building"
          height="300px"
        />
        <ActionButton />
      </StyledBox>
    </Aux>
  )
}

export default LandingFooter;