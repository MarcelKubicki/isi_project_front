import React, {useState} from 'react';
import {Avatar, Flex, Typography, Card, Button, Modal, Input, Row, Col} from 'antd';
import {UserOutlined, SettingOutlined} from '@ant-design/icons';
import useAuth from '../../useAuth';

import '../../styles/HomePage.css';

const {Title} = Typography;
const {Meta} = Card;

const Profile = () => {
  const { user, loading } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Button onClick={showModal}>
            <SettingOutlined /> Ustawienia profilu
          </Button>
          <Modal 
            title="Ustawienia profilu" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
          >
            <Input placeholder="Nowa nazwa profilu" />
            <h3>Wybierz avatara</h3>
            <Row>
              <Col span={4}>
                <Avatar shape='square' size={70} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"/>
              </Col>
              <Col span={4}>
                <Avatar shape='square' size={70} src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"/>
              </Col>
              <Col span={4}>
                <Avatar shape='square' size={70} src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"/>
              </Col>
              
            </Row>
          </Modal>
          
      </div>

      <Card
          key='1'
          bordered={false}
          style={{
            width: '100%',
            marginTop: 20,
            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)',
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          <Meta
            avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
            title= 'User Name'
            description= '19.06.2024 15:00'
            style={{
              
            }}
          />
          <div style={{marginTop: '10px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros.
          </div>
        </Card>
    </>
  );
}

export default Profile;