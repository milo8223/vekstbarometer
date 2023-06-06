import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyle = styled.div`
  margin: 10px 10px 20px 10px;
  a {
    font-family: ${props => props.theme.primaryFontFamily};
    color: ${props => props.theme.fontColor};
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #CECECE;
    background-color: #fff;
    padding: 6px 20px;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    a {
      color: #ffffff;
      background-color: ${props => props.theme.secondoryColor};
      border-color: ${props => props.theme.secondoryColor};
    }
  }
`;

const ButtonTypes = ({ title }) => (
  <ButtonStyle>
    <Link to="/home">
      {title}
    </Link>
  </ButtonStyle>
);

export default ButtonTypes;