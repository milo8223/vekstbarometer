import styled from "styled-components";

import { UserOutlined } from '@ant-design/icons';
import ButtonTypes from "./buttonTypes";

const ModalStyle = styled.div`
  padding: 60px 0;
  .head-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    .anticon {
      font-size: 28px;
      svg {
        fill: ${props => props.theme.secondoryColor};
      }
    }
    .text-info {
      font-family: ${props => props.theme.primaryFontFamily};
      font-size: 22px;
      font-weight: 700;
      color: #0A0A0A;
      padding-top: 10px;
    }
  }

  .body-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Usertypes = [
  "Politician",
  "Beaurocrats",
  "Business",
  "Normal user"
]

const LandingModal = (props) => (
  <ModalStyle>
    <div className="head-wrap">
      <UserOutlined />
      <div className="text-info">
        Select Type of User
      </div>
    </div>
    <div className="body-wrap">
      {Usertypes.map((title, index) => (
        <ButtonTypes title={title} key={index} />
      ))}
    </div>
  </ModalStyle>
);

export default LandingModal;