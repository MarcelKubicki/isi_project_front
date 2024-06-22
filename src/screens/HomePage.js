import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {Flex, Button, Layout, Menu} from 'antd';
import {
  UserOutlined, 
  TeamOutlined,
  HomeOutlined,
  PoweroffOutlined,
  TrademarkOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';

import Profile from './homePageSubpages/Profile';
import HomeMainBoard from './homePageSubpages/HomeMainBoard';
import Friends from './homePageSubpages/Friends';
import SearchFriend from './homePageSubpages/SearchFriend';

import useAuth from '../useAuth';
import '../styles/HomePage.css';

const {Header, Content, Sider} = Layout;

const HomePage = () => {
  const { user, loading } = useAuth();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          padding: '0 20px',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Flex style={{width: '100%'}} justify='space-between' align='center'>
          <div className="header">
            <h1>FZ: FriendsZone</h1>
          </div>

          <Button>Posiadane Robsony: <TrademarkOutlined />10</Button>
        </Flex>
      </Header>
      
      <Layout>
        <Sider
            width={250}
            theme='light'
            style={{
              position: 'fixed',
              left: 0,
              top: 62,
              bottom: 0,
              padding: '10px 5px'
            }}
        >
          <Flex vertical justify='space-between' style={{height: '100%'}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{
                height: 'auto',
                borderRight: 0,
              }}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/HomePage">Strona Główna</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/HomePage/Profile">Profil</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<TeamOutlined />}>
                <Link to="/HomePage/Friends">Obserwowani</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
                <Link to="/HomePage/SearchFriend">Obserwuj</Link>
              </Menu.Item>
            </Menu>
            
            <Button 
              type='primary'
              icon={<PoweroffOutlined />}
              style={{
                backgroundColor: '#001529'
              }}
            >
              Wyloguj się
            </Button>
          </Flex>
        </Sider>
        <Layout
        style={{
          marginLeft: 250,
        }}
        >
          <Content
            style={{
              margin: '20px 200px',
              overflow: 'initial',
            }}
          >
            <Routes>
              <Route path="/" element={<HomeMainBoard user={user}/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/searchFriend" element={<SearchFriend />} />
            </Routes>
          </Content>

        </Layout>
      </Layout>
      
    </Layout>
  );
}

export default HomePage;