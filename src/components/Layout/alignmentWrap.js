import styled from "styled-components";

const alignmentWrap = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.maxWidth ? props.maxWidth : "100%"};
  margin: 0 auto;
`;

export default alignmentWrap;