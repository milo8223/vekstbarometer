import AlignmentWrap from "../../components/Layout/alignmentWrap";
import RegionBox from "../../components/landing/regionBox/RegionBox";
import { RegionData } from "./dataLanding";

function Landing() {
  return (
    <div>
      <AlignmentWrap>
        {RegionData.map((region) => (
          <RegionBox region={region} key={region.id} />
        ))}
      </AlignmentWrap>
    </div>
  );
}

export default Landing;