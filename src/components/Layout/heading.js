import styled from "styled-components";

const HeadingStyle = styled.div`
  padding: ${props => props.padding ? props.padding : "0"};
  h1 {
    font-family: ${props => props.theme.primaryFontFamily};
    font-size: ${props => props.size ? props.size : "20px"};
    color: ${props => props.color ? props.color : "#000000"};
    margin: 0 0 20px 0;
  }
`;

const Heading = (props) => (
  <HeadingStyle
    size={props.size}
    color={props.color}
    padding={props.padding}
  >
    <h1 className="heading">
      {props.title}
    </h1>
  </HeadingStyle>
);

export default Heading;