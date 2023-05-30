import styled from "styled-components";

const ImageStyle = styled.div` 
    width: 100%;
    height: 100%;
    max-width: 500px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: ${props => props.rounded ? "24px" : "0"};
      object-fit: cover;
    }
`;

const Image = (props) => (
  <ImageStyle rounded={props.rounded ? true : false} >
    <img src={props.path} alt={props.text} />
  </ImageStyle>
);

export default Image;