import styled from "styled-components";
import { Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Image from "../../Layout/image";
const { Search } = Input;

const LogoStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
  img {
    width: initial !important;
  }

  .ant-input-search {
    width: calc(100% - 600px);
    max-width: 500px;
    .ant-input-wrapper {
      input {
        font-family: ${props => props.theme.primaryFontFamily};
        color: #A3A3A3;
        font-weight: 500;
        font-size: 14px;
        background: #fff;
        border-radius: 18px 0 0 18px;
        border:none;
        padding: 14px 20px;
        &:focus {
          box-shadow: none;
        }
      }
      .ant-input-group-addon {
        background: #fff;
        border-radius: 0 18px 18px 0;
        padding-right: 10px;
        .ant-btn {
          background: #fff;
          border-radius: 0 18px 18px 0;
          border:none;
          box-shadow: none;
        }
      }
    }
  }
`;

const LoginButton = styled.div`
  margin: 10px 10px 20px 10px;
  a {
    font-family: ${props => props.theme.primaryFontFamily};
    color: #0F092E;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    padding: 6px 20px;
    display: flex;
    align-items: center;
    .anticon {
      color: #0F092E;
      font-size: 26px;
      font-weight: 500;
      margin-right: 15px;
    }
  }
`;

const onSearch = (value) => console.log(value);

const HeaderContent = () => (
  <LogoStyle>
    <Image
      path={require('../../../assets/images/ringerike.png')}
      text="Vekstbarometer"
      width="initial"
      height="80px"
    />
    <Search
      placeholder="Search Indicator..."
      onSearch={onSearch}
    />
    <LoginButton>
      <Link to="/home">
        <LoginOutlined />
        Log In
      </Link>
    </LoginButton>
  </LogoStyle>
);

export default HeaderContent;