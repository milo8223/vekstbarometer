import styled from "styled-components";
import Heading from "../../Layout/heading";

const ModalStyle = styled.div`
  padding: 30px 20px;
  .body-wrap {
    font-family: ${props => props.theme.primaryFontFamily};
    color: #6D6D6D;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    ul {
      list-style: none;
      padding-left: 20px;
      li {
        font-family: ${props => props.theme.primaryFontFamily};
        font-size: 16px;
        font-weight: 500;
        color: #6979F8;
      }
    }
  }
`;


const AboutModal = (props) => (
  <ModalStyle>
    <Heading title="About the varibale" size="32px" />
    <div className="body-wrap">
      Overall growth indicator for the Ringerik region. We measure growth in the region and for the municipalities of Ringerike, Jevnaker and Hole through the four variables:
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
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem
    </div>
  </ModalStyle>
);

export default AboutModal;