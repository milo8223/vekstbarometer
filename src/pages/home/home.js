import { Layout, theme } from 'antd';
import { useState } from 'react';
import SidebarLogos from '../../components/home/sidebarLogos';
import HeaderContent from '../../components/home/headerContent/headerContent';
import BodyContent from '../../components/home/bodyContent/bodyContent';
import styled from "styled-components";
import MenuContent from '../../components/home/menuContent/menuContent';

const { Header, Content, Sider } = Layout;

const LayoutWrapper = styled.div`
  .ant-layout-has-sider {
    .ant-layout-sider {
      width: 250px !important;
      flex: 0 0 250px !important;
      max-width: 250px !important;
      min-width: 250px !important;
      .ant-layout-sider-trigger {
        display: none;
      }
    }
  }
`;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <LayoutWrapper>
      <Layout
        style={{
          minHeight: '100vh',
          background: "#F3F2F7",
          padding: "20px"
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: "#f5f5f5",
            borderRadius: "30px",
            boxShadow: "0px 0px 20px rgba(143 ,147 ,151, 0.3)"
          }}
        >
          <SidebarLogos />
          <MenuContent />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#F3F2F7",
              margin: "0 16px 0 16px",
              height: "initial"
            }}
          >
            <HeaderContent />
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <BodyContent />
          </Content>
        </Layout>
      </Layout>
    </LayoutWrapper>
  );
};
export default Home;