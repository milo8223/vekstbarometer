import { useState } from "react";
import styled from "styled-components";
import { Col, Row, Modal } from 'antd';
import Heading from "../../Layout/heading";
import AboutModal from "./aboutModal";
import { ReactSVG } from "react-svg";
import Stat1 from '../../../assets/icons/other-1.svg';
import Stat2 from '../../../assets/icons/other-2.svg';
import Stat3 from '../../../assets/icons/other-3.svg';
import Stat4 from '../../../assets/icons/other-4.svg';

const StatsData = [
  {
    id: 1,
    info: "Important"
  },
  {
    id: 2,
    info: "Important"
  },
  {
    id: 3,
    info: "Important"
  },
  {
    id: 4,
    info: "Important"
  }
]
const IndicatorDetailStyle = styled.div`
  background: none;
  .bg-wrap {
    background: #fff;
    padding: 24px 30px;
    border-radius: 24px;
    &.about-variable {
      margin-bottom: 25px;
    }
    .text-detail-info {
      font-family: ${props => props.theme.secondaryFontFamily};
      color: #6D6D6D;
      font-size: 15px;
      line-height: 22px;
      font-weight: 400;
      ul {
        list-style: none;
        padding-left: 20px;
        li {
          font-family: ${props => props.theme.primaryFontFamily};
          font-size: 14px;
          font-weight: 500;
          color: #6979F8;
        }
      }
    }
    .see-more {
      margin-top: 15px;
      font-family: ${props => props.theme.secondaryFontFamily};
      color: #223AF7;
      text-decoration: underline;
      font-size: 15px;
      line-height: 22px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const StyledStatsBox = styled.div`
  background-color: rgba(105, 121, 248, 0.15);
  border-radius: 18px;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0px 7px 70px #5A61691A;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text-info {
    font-family: ${props => props.theme.primaryFontFamily};
    color: ${props => props.theme.secondoryColor};
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`;

const StatsBox = (props) => {
  return (
    <StyledStatsBox>
      <ReactSVG src={props.src[props.stat.id - 1]} />
      <div className="text-info">
        {props.stat.info}
      </div>
    </StyledStatsBox>
  )
}

const IndicatorDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <IndicatorDetailStyle>
      <Heading title="Display options" />
      <div className="about-variable bg-wrap">
        <Heading title="About the variable" />
        <div className="text-detail-info">
          Overall growth indicator for the Ringerik region. We measure growth in the region and for the municipalities of Ringerike, Jevnaker and Hole through the four variables:
          <ul>
            <li>
              Population
            </li>
            <li>
              Value creation
            </li>
            <li>
              Employemnt
            </li>
            <li>
              Jobs
            </li>
          </ul>
          An index number of + 4 indicates growth this year in all areas. A growth of -4 shows a decline in all areas. An index of 0 shows an increase of two and a decrease of two.
        </div>
        <div className="see-more" onClick={() => setOpen(true)}>
          See More
        </div>
        <Modal
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          footer={null}
          width={700}
        >
          <AboutModal />
        </Modal>
      </div>
      <div className="other-stats bg-wrap">
        <Heading title="Other statistics" />
        <Row gutter={[16, 16]}>
          {StatsData.map((stat) => (
            <Col span={12} key={stat.id}>
              <StatsBox stat={stat} src={[Stat1, Stat2, Stat3, Stat4]} />
            </Col>
          ))}
        </Row>
      </div>
    </IndicatorDetailStyle >
  )
};

export default IndicatorDetails;