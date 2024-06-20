import React, {useState} from 'react';
import {Input, Avatar, Flex, Button, Typography, Card} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import '../../styles/HomeMainBoard.css';

const {Title} = Typography;
const {Meta} = Card;
const {TextArea} = Input;

const testPosts = [
  {
    username: 'Xulaniec',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros.',
    date: '19.06.2024 15:00'
  },
  {
    username: 'GochaGocha3zł',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros.',
    date: '19.06.2024 16:00'
  },
];

const HomeMainBoard = ({user}) => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState(testPosts);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  const handlePublish = () => {
    if (postContent.trim()) {
      setPosts([
        {
          username: user ? user.username : 'User Name',
          content: postContent,
          date: getCurrentDate(),
        },
        ...posts
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
            value={postContent}
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
            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.25)',
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          <Meta
            avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
            title= {post.username}
            description= {post.date}
            style={{
              
            }}
          />
          <div style={{marginTop: '10px'}}>
            {post.content}
          </div>
        </Card>
      ))}
    </>
  );
};

export default HomeMainBoard;