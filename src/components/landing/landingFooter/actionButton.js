import styled from "styled-components";
import { ArrowRightOutlined } from '@ant-design/icons';

const ButtonStyle = styled.div`
  background-color: ${props => props.theme.primaryColor};
  position: absolute;
  top: 50%;  
  right: 30px; 
  transform: translate(0, -50%);
  z-index: 1;
  width: 300px;
  height: fit-content;
  padding: 40px;
  border-radius: 18px;
  
  .text-info {
    font-family: ${props => props.theme.primaryFontFamily};
    color: white;
    font-weight: 600;
    font-size: 26px;
    span {
      display: block;
    }
  }
  `;

const Button = styled.button`
  font-family: ${props => props.theme.primaryFontFamily};
  color: white;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding: 7px 24px;
  border-radius: 100px;
  background-color: #464255;
  display: block;
  margin-top: 20px;
  width: fit-content;

  span {
    padding-left: 2px;
  }
`;

const ActionButton = (props) => (
  <ButtonStyle>
    <div className="text-info">
      Explore Universitet <span>i Sorost-Norge</span>
    </div>
    <Button as="a" href="#">Explore Now <span><ArrowRightOutlined /></span></Button>
  </ButtonStyle>
);

export default ActionButton;