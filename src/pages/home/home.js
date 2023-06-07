import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import SidebarLogos from '../../components/home/sidebarLogos';
import HeaderContent from '../../components/home/headerContent/headerContent';
import BodyContent from '../../components/home/bodyContent/bodyContent';
import styled from "styled-components";

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

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

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
            background: "#FFF",
            borderRadius: "30px"
          }}
        >
          <SidebarLogos />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
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