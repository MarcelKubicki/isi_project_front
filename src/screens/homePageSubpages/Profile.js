import React from 'react';
import {Avatar, Flex, Typography, Card} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import useAuth from '../../useAuth';

import '../../styles/HomePage.css';

const {Title} = Typography;
const {Meta} = Card;

const Profile = () => {
  const { user, loading } = useAuth();
  return (
    <>
      <div className='containerAddPost'>
          <Flex vertical gap='small' align='center'>
            <Avatar 
              shape="square"
              size={128}
              icon={<UserOutlined/>}
            />
            <Title level={3} style={{margin: 0}} >{user ? (<span>{user.username}</span>) : 'User Name'}</Title>
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
          description="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
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
    </>
  );
}

export default Profile;