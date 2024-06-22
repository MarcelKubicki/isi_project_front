import React, {useState, useEffect} from 'react';
import {Input, Avatar, Flex, Button, Typography, Card, Upload, Image, Dropdown} from 'antd';
import {UserOutlined, HeartOutlined, HeartFilled, CommentOutlined, SendOutlined, FileImageFilled, MoreOutlined} from '@ant-design/icons';
import '../../styles/HomeMainBoard.css';

const {Title} = Typography;
const {Meta} = Card;
const {TextArea, Search} = Input;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Usun post
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Edytuj post
        </a>
      ),
    },
  ];

const testPosts = [
  {
    username: 'Xulaniec',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros.',
    date: '19.06.2024 15:00',
    comments: [
      { username: 'User1', content: 'Great post!', date: '19.06.2024 15:30' },
      { username: 'User2', content: 'Thanks for sharing.', date: '19.06.2024 16:00' },
    ],
    image: "https://nasionamarychy.pl/img/pshow/blog/118.jpg"
  },
  {
    username: 'GochaGocha3zł',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu orci in turpis pretium aliquam eu eu tortor. Morbi condimentum lacus vitae neque lobortis sodales. Aliquam porttitor odio metus, lacinia hendrerit nibh posuere ut. Praesent rhoncus volutpat lorem, vehicula ultricies erat convallis eget. Nunc feugiat auctor mauris, non dapibus nulla dapibus in. Phasellus vitae egestas sapien, in efficitur eros.',
    date: '19.06.2024 16:00',
    comments: [],
    image: null
  },
];

const HomeMainBoard = ({user}) => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState(testPosts);
  const [expandedPost, setExpandedPost] = useState(null);
  const [likes, setLikes] = useState(Array(testPosts.length).fill(false));
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [commentContent, setCommentContent] = useState({});

  // useEffect(() => {
  //  fetchUserPosts(user.username);
  // }, [count]);

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
          comments: [],
          image: selectedImage,
        },
        ...posts
      ]);
      setLikes([false, ...likes]);
      setPostContent('');
      setSelectedImage(null);
      setFileList([]);
    }
  };

  const handleToggleComments = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  const handleLikes = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const image = await getBase64(newFileList[0].originFileObj);
      setSelectedImage(image);
    } else {
      setSelectedImage(null);
    }
  };

  const handleCommentChange = (index, e) => {
    const newCommentContent = {...commentContent, [index]: e.target.value};
    setCommentContent(newCommentContent);
  };

  const handleAddComment = (index) => {
    if (commentContent[index] && commentContent[index].trim()) {
      const newPosts = [...posts];
      newPosts[index].comments.push({
        username: user ? user.username : 'User Name',
        content: commentContent[index],
        date: getCurrentDate(),
      });
      setPosts(newPosts);
      setCommentContent({ ...commentContent, [index]: '' });
    }
  }


  const uploadButton = (
    <Button 
      icon={<FileImageFilled />}
    >
        Dodaj zdjęcie  
    </Button>
  );

  // const fetchUserPosts = async (userId) => {
  //   try {
  //     const response = await axios.get(/api/posts/${userId});
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch user posts:', error);
  //   }
  // };

  return(
    <>
      <div className='containerAddPost'>
        <Flex vertical gap={20}>
          <Flex gap='middle' align='center'>
            <Avatar
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
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
            placeholder="Napisz post (min. 10 znaków)..."
            style={{ height: 120, resize: 'none'}}
            onChange={handlePostChange}
            value={postContent}
          />

          <Upload
            listType="picture"
            onPreview={handlePreview}
            onChange={handleChange}
            fileList={fileList}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>

          {previewImage && (
            <Image
              wrapperStyle={{
                display: 'none',
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
          
          <Button type='primary' onClick={handlePublish} disabled={postContent.length > 9 ? false : true}>
            Opublikuj
          </Button>
        </Flex>
      </div>

      {posts.map((post, index) => (
        <>
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
            cover={
              post.image && (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img
                    alt="example"
                    src={post.image}
                    style={{
                      width: '50%',
                      marginTop: 20,
                    }}
                  />
                </div>
              )
            }
            actions={[
              <span onClick={() => handleLikes(index)}>
                {likes[index] ? <HeartFilled style={{color: 'red'}} key="like"/> : <HeartOutlined key="like" />}
                {likes[index] ? <span style={{fontWeight: 600, color: 'red'}}> Polubione</span> : ' Polub'}
              </span>,
              <span onClick={() => handleToggleComments(index)}>
                <CommentOutlined key="comment"/> Skomentuj
              </span>,
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow
              >
                <div><MoreOutlined /><span>Opcje</span></div>
              </Dropdown>
            ]}
          >

            <Meta
              avatar={<Avatar shape="square" size={45} icon={<UserOutlined/>} />}
              title= {post.username}
              description= {post.date}
            />

            <div style={{marginTop: '10px'}}>
              {post.content}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              padding: '0 5px',
              color: 'rgba(0, 0, 0, 0.45)'
            }}>
              <span>x Polubień</span>
              <span>x Komentarzy</span>
            </div>

          </Card>
          
          {expandedPost === index && (
            <div style={{ 
              paddingTop: '15px',
              paddingBottom: '5px',
              paddingLeft: '20px',
              paddingRight: '20px',
              marginTop: '-5px', 
              backgroundColor: '#C7C8CC',
              borderRadius: '0 0 7px 7px' 
            }}>
              <Card
                bordered={false}
                style={{ marginBottom: '10px'}}
              >
                <Meta
                  avatar={<Avatar shape="square" size={40} icon={<UserOutlined />} />}
                  title={user ? (<span>{user.username}</span>) : <p>User Name</p>}
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                />
                
                <Search 
                  value={commentContent[index] || ''}
                  onChange={(e) => handleCommentChange(index, e)}
                  onSearch={() => handleAddComment(index)}
                  style={{marginTop: '4px'}} 
                  placeholder="Napisz komentarz" 
                  autoSize 
                  enterButton={<SendOutlined />}
                />

              </Card>

              {post.comments.length > 0 ? (
                post.comments.map((comment, commentIndex) => (
                  <Card
                    key={commentIndex}
                    bordered={false}
                    style={{ marginBottom: '10px'}}
                  >
                    <Meta
                      avatar={<Avatar shape="square" size={40} icon={<UserOutlined />} />}
                      title={comment.username}
                      description={comment.date}
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    />
                    <div style={{ marginTop: '10px' }}>
                      {comment.content}
                    </div>
                  </Card>
                ))
              ) : (
                <div></div>
              )}
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default HomeMainBoard;