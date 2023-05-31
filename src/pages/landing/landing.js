import AlignmentWrap from "../../components/Layout/alignmentWrap";
import Image from "../../components/Layout/image";
import RegionBox from "../../components/landing/regionBox/RegionBox";
import styled from "styled-components";

import { RegionData } from "./dataLanding";
import bg from '../../assets/images/landing-bg.png';

const LandingWrap = styled.div` 
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .logo-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
`;

function Landing() {
  return (
    <LandingWrap>
      <div className="logo-wrap">
        <Image path={require('../../assets/logo.png')} text="USN logo" width="275px" />
      </div>
      <AlignmentWrap maxWidth="1120px">
        {RegionData.map((region) => (
          <RegionBox region={region} key={region.id} />
        ))}
      </AlignmentWrap>
    </LandingWrap>
  );
}

export default Landing;