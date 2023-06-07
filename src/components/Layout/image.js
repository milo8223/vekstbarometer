import styled from "styled-components";

const ImageStyle = styled.div` 
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "100%"};
  padding: ${props => props.padding ? props.padding : "0"};
  max-width: ${props => props.withText ? "90%" : "100%"};
  overflow: hidden;
  
  img {
    width: ${props => props.withImg ? props.width : "100%"};
    height: ${props => props.withImg ? props.height : "100%"};
    border-radius: ${props => props.rounded ? props.rounded : "0"};
    object-fit: cover;
  }
`;

const Image = (props) => (
  <ImageStyle
    withText={props.withText ? true : false}
    withImg={props.withImg ? true : false}
    rounded={props.rounded}
    width={props.width}
    height={props.height}
    padding={props.padding}
  >
    <img src={props.path} alt={props.text} />
  </ImageStyle>
);

export default Image;