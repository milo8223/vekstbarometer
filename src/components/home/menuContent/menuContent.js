import { BankOutlined, UsergroupAddOutlined, SoundOutlined, CalculatorOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import styled from "styled-components";

const Menustyle = styled.div`
  .ant-menu-root {
    padding: 0 10px;
    background: none !important;
    border: none !important;
    > .ant-menu-submenu {
      > .ant-menu-submenu-title {
        background: #fff;
        border-radius: 14px;
        height: 45px;
        line-height: 45px;
        .ant-menu-title-content {
          font-family: ${props => props.theme.primaryFontFamily};
          font-size: 13px;
          color: #0F092E;
          font-weight: 500;
        }
      }
      &.ant-menu-submenu-open {
        > .ant-menu-submenu-title {
          background: #AB54DB;
          color: #fff;
          .ant-menu-title-content {
            color: #fff;
          }
        }
      }
    }
  }
  .ant-menu-submenu {
    > .ant-menu {
      background: none !important;
      > .ant-menu-submenu {
        > .ant-menu-submenu-title {
          border-radius: 14px;
          height: 45px;
          line-height: 45px;
          .ant-menu-title-content {
            font-family: ${props => props.theme.primaryFontFamily};
            font-size: 13px;
            color: #0F092E;
            font-weight: 500;
          }
        }
        .ant-menu-item {
          height: 36px;
          line-height: 36px;
          &.ant-menu-item-only-child {
            padding-left: 48px !important;
          }
          .ant-menu-title-content {
            font-family: ${props => props.theme.primaryFontFamily};
            font-size: 13px;
            color: #ab54db;
            font-weight: 500;
          }
          &.ant-menu-item-selected {
            background: rgba(171, 84, 219, 0.1);
            .ant-menu-title-content {
              color: #861fbf;
            }
          }
        }
      }
    }
  }
`

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const primaryitems = [
  getItem('Infrastructure', 'sub1', <BankOutlined />, [
    getItem(
      'Road & Track',
      'sub2',
      null,
      [
        getItem('Expected growth', '1'),
        getItem('Expected decisive competence', '2')
      ]
    ),
    getItem(
      'Housing construction',
      'sub3',
      null,
      [
        getItem('New completed homes, trend', '3'),
        getItem('Populations new housing', '4'),
        getItem('Residential areas', '5')
      ]
    ),
    getItem(
      'Public amenities',
      'sub4',
      null,
      [
        getItem('Number of Schools', '6'),
        getItem('Number of hospitals', '7'),
        getItem('Number of cultural institutions', '8')
      ]
    )
  ]),
  getItem('Labour market', 'sub5', <UsergroupAddOutlined />, [
    getItem(
      'Employemnt data',
      'sub6',
      null,
      [
        getItem('Employment per municipality', '9'),
        getItem('Employment share', '10'),
        getItem('Employment per capita', '11'),
        getItem('Unemployment', '12'),
        getItem('Commuter balance', '13'),
        getItem('Food shares', '14'),
        getItem('Private employment rate', '15')
      ]
    ),
    getItem(
      'Population demographics',
      'sub7',
      null,
      [
        getItem('Number of residents', '16'),
        getItem('Age composition', '17'),
        getItem('Population change, trend', '18'),
        getItem('Net domestic movement', '19'),
        getItem('Immigration', '20')
      ]
    )
  ]),
  getItem('Competition', 'sub8', <SoundOutlined />, [
    getItem(
      'New enterprises',
      'sub9',
      null,
      [
        getItem('New enterprises', '21'),
        getItem('Bankruptcies', '22')
      ]
    ),
    getItem(
      'Business diversity',
      'sub10',
      null,
      [
        getItem('Business diversity', '23')
      ]
    )
  ]),
  getItem('Business expectations', 'sub11', <CalculatorOutlined />, [
    getItem(
      'Net expectations',
      'sub12',
      null,
      [
        getItem('Net expectations', '24')
      ]
    ),
    getItem(
      'Economic expectations',
      'sub13',
      null,
      [
        getItem('Expected turnover', '25'),
        getItem('Expected profitability', '26'),
        getItem('Expected number of employees', '27'),
        getItem('Expected investments', '28')
      ]
    ),
    getItem(
      'Limitations',
      'sub14',
      null,
      [
        getItem('Expected demand', '29'),
        getItem('Expected production capacity', '30'),
        getItem('Expected access to labour', '31'),
        getItem('Expected competence', '32'),
        getItem('Expected funding', '33'),
        getItem('Expected framework conditions', '34')
      ]
    )
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub5', 'sub8', 'sub11'];
const rootnextSubmenuKeys = [
  'sub2',
  'sub3',
  'sub4',
  'sub6',
  'sub7',
  'sub9',
  'sub10',
  'sub12',
  'sub13',
  'sub14'
];
const MenuContent = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    if (keys.some(value => rootnextSubmenuKeys.includes(value))) {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        if (keys.length > 2) {
          setOpenKeys([keys[0], keys[keys.length - 1]]);
        } else {
          setOpenKeys(keys);
        }
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    } else {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    }
  };
  return (
    <Menustyle>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={primaryitems}
      />
    </Menustyle>
  );
};
export default MenuContent;