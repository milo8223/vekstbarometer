import React from "react";
import Aux from "../../../hoc/ax";
import Image from "../../Layout/image";
  
const RegionBox = ({imageDetail, textDetail}) => {
    return (
        <Aux>
            <styledBox>
                <Image path={imageDetail} text={textDetail} />
            </styledBox>
        </Aux>
    )
}

export default RegionBox;