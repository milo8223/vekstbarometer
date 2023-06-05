import styled from "styled-components";

const ModalStyle = styled.div` 
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "100%"};
  padding: ${props => props.padding ? props.padding : "0"};
  max-width: ${props => props.withText ? "90%" : "100%"};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: ${props => props.rounded ? props.rounded : "0"};
    object-fit: cover;
  }
`;

const LandingModal = (props) => (
  <ModalStyle
    withText={props.withText ? true : false}
    rounded={props.rounded}
    width={props.width}
    height={props.height}
    padding={props.padding}
  >
    <img src={props.path} alt={props.text} />
  </ModalStyle>
);

export default LandingModal;