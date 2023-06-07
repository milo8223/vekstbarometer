import styled from "styled-components";
import { Col, Row } from 'antd';
import Heading from "../../Layout/heading";
import Image from "../../Layout/image";

const InfoData = [
  {
    id: 1,
    image: require('../../../assets/images/ringerike.jpeg'),
    imageText: 'Stats',
    info: "Extremity so attending sdjs objection as these"
  },
  {
    id: 2,
    image: require('../../../assets/images/haadeland.jpeg'),
    imageText: 'Stats',
    info: "Webinar presentation of the Growth Barometer 2021"
  },
  {
    id: 3,
    image: require('../../../assets/images/ringerike.jpeg'),
    imageText: 'Stats',
    info: "The growth barometer: Ask Gård processing"
  }
]
const IndicatorStyle = styled.div`
  background: none;
`;

const StyledInfoBox = styled.div`
  background-color: white;
  border-radius: 18px;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0px 7px 70px #5A61691A;
  display: flex;
  align-items: center;
  .text-info {
    font-family: ${props => props.theme.primaryFontFamily};
    color: #2B394F;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
    padding-left: 20px;
    width: calc(100% - 80px);
  }
`;

const InfoBox = (info) => {
  return (
    <StyledInfoBox>
      <Image
        path={info.info.image}
        text={info.info.image}
        withImg
        rounded="16px"
        width="72px"
        height="72px"
        padding="0 0 20px 0"
      />
      <div className="text-info">
        {info.info.info}
      </div>
    </StyledInfoBox>
  )
}

const IndicatorInfo = () => (
  <IndicatorStyle>
    <Heading title="Growth barometer reports and videos" size="24px" />
    <Row gutter={16}>
      {InfoData.map((info) => (
        <Col span={8} key={info.id}>
          <InfoBox info={info} />
        </Col>
      ))}
    </Row>
  </IndicatorStyle>
);

export default IndicatorInfo;