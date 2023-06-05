import React, { useState } from "react";
import Aux from "../../../hoc/ax";
import Image from "../../Layout/image";
import StyledBox from "./styledBox";

import { Modal } from 'antd';

const RegionBox = (region) => {
	const [open, setOpen] = useState(false);

	return (
		<Aux>
			<StyledBox onClick={() => setOpen(true)}>
				<Image
					path={region.region.image.imageDetail}
					text={region.region.image.textDetail}
					rounded="20px"
					height="300px"
					padding="0 0 22px 0" />
				<Image
					path={region.region.textImage.imageDetail}
					text={region.region.textImage.textDetail}
					withText
					padding="0 10px" />
			</StyledBox>
			<Modal
				title="Modal 1000px width"
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
			>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
		</Aux>
	)
}

export default RegionBox;