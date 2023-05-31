import React from "react";
import Aux from "../../../hoc/ax";
import Image from "../../Layout/image";
import StyledBox from "./styledBox";

const RegionBox = (region) => {
	return (
		<Aux>
			<StyledBox>
				<Image path={region.region.image.imageDetail} text={region.region.image.textDetail} rounded height="300px" padding="0 0 22px 0" />
				<Image path={region.region.textImage.imageDetail} text={region.region.textImage.textDetail} withText padding="0 10px" />
			</StyledBox>
		</Aux>
	)
}

export default RegionBox;