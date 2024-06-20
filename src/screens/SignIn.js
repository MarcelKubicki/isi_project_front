import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Form, Input, Button, Alert, Layout} from 'antd';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import axios from '../axiosConfig';
import {GoogleOutlined} from '@ant-design/icons';
import '../styles/AuthForm.css';
const {Header, Content} = Layout;

const SignIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/auth/login', {
        username: values.username,
        password: values.password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        console.log('JWT Token:', token);
        localStorage.setItem('token', token);
        navigate('/HomePage');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Logowanie nie powiodło się. Spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
        <div className="header">
          <h1>FZ: FriendsZone</h1>
        </div>
        
      </Header>

      <Content 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          minHeight: '92vh',
          flexDirection: 'column',
          alignItems: 'center'
          }}>
      <div className="container">
        <h2 className="title">Logowanie</h2>
        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '16px' }} />}
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Proszę podać nazwę użytkownika!' }]}
            className="form-item"
          >
            <Input placeholder='Nazwa użytkownika' />
          </Form.Item>

          <div className='password-container'>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Proszę podać hasło!' }]}
              className="form-item"
            >
              <Input.Password placeholder='Hasło' />
            </Form.Item>
            <div className='resetPassword'>
              <p><Link to="/reset-password"><b>Nie pamiętasz hasła?</b></Link></p>
            </div>
          </div>

          <div className='submit-container'>
            <Form.Item className='button-container'>
              <Button type="primary" htmlType="submit" loading={loading}>
                Zaloguj
              </Button>
            </Form.Item>
            <p>Nie masz konta? <Link to="/signUp"><b>Dołącz do nas!</b></Link></p>
          </div>
          
            <Button 
              icon={<GoogleOutlined />} 
              onClick={() => {
                window.location.href='http://localhost:8080/oauth2/authorization/google';
              }}
            >
              Zaloguj się przez Google
            </Button>
        </Form>
      </div>
      </Content>
    </Layout>
  );
};

export default SignIn;