import React from 'react';
import {Input, Avatar, Flex, Button, Typography, Layout, Menu, Card} from 'antd';
import {
  UserOutlined, 
  TeamOutlined,
  HomeOutlined,
  GroupOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import useAuth from './useAuth';
import './HomePage.css';
const {Title} = Typography;
const {Header, Content, Sider} = Layout;
const {Meta} = Card;

const {TextArea} = Input;

const HomePage = () => {
  const { user, loading } = useAuth();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          padding: 0,
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <div className="header">
          <h1>FZ: FriendsZone</h1>
        </div>
        
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              height: 'auto',
              borderRight: 0,
            }}
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: 'Strona Główna',
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: `Profil`,
              },
              {
                key: '3',
                icon: <TeamOutlined />,
                label: 'Znajomi',
              },
              {
                key: '4',
                icon: <GroupOutlined />,
                label: 'Grupy',
              },
            ]}
          />
          <Menu
            mode="inline"
            style={{
              // height: '100%',
              // borderRight: 0,
            }}
            items={[
              {
                key: '1',
                icon: <PoweroffOutlined />,
                label: 'Wyloguj sie',
              }
            ]}
          />
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
          <div className='containerAddPost'>
            <Flex vertical gap={20}>
              <Flex gap='middle' align='center'>
                <Avatar 
                  shape="square"
                  size={64}
                  icon={<UserOutlined/>}
                />
                <Title level={3} style={{margin: 0}} >{user ? (<span>{user.username}</span>) : <p>Nie ma</p>}</Title>
              </Flex>
              <TextArea
                showCount
                maxLength={150}
                placeholder="Napisz post..."
                style={{ height: 120, resize: 'none'}}
              />
              <Button type='primary' s>
                Opublikuj
              </Button>
            </Flex>
          </div>

          <Card
            bordered={false}
            style={{
              width: '100%',
              marginTop: 20,
              boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)'
            }}
            cover={
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img
                  alt="example"
                  src="https://nasionamarychy.pl/img/pshow/blog/118.jpg"
                  style={{
                    width: '50%',
                    marginTop: 20,
                  }}
                />
              </div>
            }
          >
            <Meta
              avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
              title="User Name"
              description="Strasznie wczoraj zachlałem"
            />
          </Card>

          <Card
            bordered={false}
            style={{
              width: '100%',
              marginTop: 20,
              boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)'
            }}
            cover={
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img
                  alt="example"
                  src="https://nasionamarychy.pl/img/pshow/blog/118.jpg"
                  style={{
                    width: '50%',
                    marginTop: 20,
                  }}
                />
              </div>
            }
          >
            <Meta
              avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
              title="User Name"
              description="Strasznie wczoraj zachlałem"
            />
          </Card>
        </Content>
        </Layout>
      </Layout>
      
    </Layout>
  );
}

export default HomePage;