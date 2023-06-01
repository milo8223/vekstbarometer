import styled from "styled-components";

const StyledBox = styled.div`
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  width: calc(100% - 80px);
  box-shadow: 0px 10px 80px #5A61690D;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1);
  }
`;

export default StyledBox;