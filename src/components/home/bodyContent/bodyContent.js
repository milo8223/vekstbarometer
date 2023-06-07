import styled from "styled-components";
import { Col, Row } from 'antd';
import HighChart from "./highChart";
import IndicatorInfo from "./indicatorInfo";
import IndicatorDetails from "./indicatorDetails";

const ContentStyle = styled.div`
  padding: 0;
  .left-col, .right-col {
    min-height: 360px;
  }
`;

const BodyContent = () => (
  <ContentStyle>
    <Row gutter={20}>
      <Col span={18}>
        <div className="left-col">
          <HighChart />
          <IndicatorInfo />
        </div>
      </Col>
      <Col span={6}>
        <div className="right-col">
          <IndicatorDetails />
        </div>
      </Col>
    </Row>
  </ContentStyle>
);

export default BodyContent;