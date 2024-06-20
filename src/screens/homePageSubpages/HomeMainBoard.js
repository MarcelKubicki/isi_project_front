import React, {useState} from 'react';
import {Input, Avatar, Flex, Button, Typography, Card} from 'antd';
import {UserOutlined} from '@ant-design/icons';
const {Title} = Typography;
const {Meta} = Card;
const {TextArea} = Input;

const HomeMainBoard = ({user}) => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePublish = () => {
    if (postContent.trim()) {
      setPosts([
        ...posts,
        {
          username: user ? user.username : 'User Name',
          content: postContent,
        },
      ]);
      setPostContent('');
    }
  };

  return(
    <>
      <div className='containerAddPost'>
        <Flex vertical gap={20}>
          <Flex gap='middle' align='center'>
            <Avatar 
              shape="square"
              size={64}
              icon={<UserOutlined/>}
            />
            <Title level={3} style={{margin: 0}} >
              {user ? (<span>{user.username}</span>) : <p>User Name</p>}
            </Title>
          </Flex>
          <TextArea
            showCount
            maxLength={150}
            placeholder="Napisz post..."
            style={{ height: 120, resize: 'none'}}
            onChange={handlePostChange}
          />
          <Button type='primary' onClick={handlePublish}>
            Opublikuj
          </Button>
        </Flex>
      </div>
      {posts.map((post, index) => (
        <Card
          key={index}
          bordered={false}
          style={{
            width: '100%',
            marginTop: 20,
            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)'
          }}
        >
          <Meta
            avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
            title= {post.username}
            description= {post.content}
          />
        </Card>
      ))}
      <Card
        bordered={false}
        style={{
          width: '100%',
          marginTop: 20,
          boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)'
        }}
        // cover={
        //   <div style={{display: 'flex', justifyContent: 'center'}}>
        //     <img
        //       alt="example"
        //       src="https://nasionamarychy.pl/img/pshow/blog/118.jpg"
        //       style={{
        //         width: '50%',
        //         marginTop: 20,
        //       }}
        //     />
        //   </div>
        // }
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
      >
        <Meta
          avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
          title="User Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros. Maecenas iaculis sed velit at vehicula. Suspendisse vulputate justo placerat augue feugiat molestie. Vivamus eu feugiat augue, quis pharetra eros."
        />
      </Card>

      <Card
        bordered={false}
        style={{
          width: '100%',
          marginTop: 20,
          boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Meta
          avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
          title="User Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros. Maecenas iaculis sed velit at vehicula. Suspendisse vulputate justo placerat augue feugiat molestie. Vivamus eu feugiat augue, quis pharetra eros."
        />
      </Card>
    </>
  );
};

export default HomeMainBoard;