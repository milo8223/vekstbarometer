import styled from "styled-components";
import Image from "../Layout/image";
import { ReactSVG } from "react-svg";
import Spare from '../../assets/sparebank.svg';

const LogoStyle = styled.div`
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px 10px 40px;
  > div {
    margin-bottom: 15px;
  }
  .injected-svg {
    width: 100%;
  }
`;

const SidebarLogos = () => (
  <LogoStyle>
    <Image
      path={require('../../assets/logo.png')}
      text="USN logo"
      width="100%"
    />
    <Image
      path={require('../../assets/ringerike.png')}
      text="Ringerike"
      width="100%"
    />
    <ReactSVG src={Spare} />
  </LogoStyle>
);

export default SidebarLogos;