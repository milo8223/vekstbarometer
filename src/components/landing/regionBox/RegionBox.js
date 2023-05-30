import React from "react";
import Aux from "../../../hoc/ax";
import Image from "../../Layout/image";
import StyledBox from "./styledBox";

const RegionBox = (region) => {
    return (
        <Aux>
            <StyledBox>
                <Image path={region.region.image.imageDetail} text={region.region.image.textDetail} rounded />
                <Image path={region.region.textImage.imageDetail} text={region.region.textImage.textDetail} withText />
            </StyledBox>
        </Aux>
    )
}

export default RegionBox;