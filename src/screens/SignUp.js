import React, { useState } from 'react';
import { Form, Input, Button, Select, Alert, Layout} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from '../axiosConfig';
import '../styles/AuthForm.css';
const {Header, Content} = Layout;

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/auth/register', {
        name: values.name,
        surname: values.surname,
        gender: values.gender,
        username: values.username,
        email: values.email,
        password: values.password,
      });
      if (response.status === 200) {
        navigate('/signIn');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Rejestracja nie powiodła się. Spróbuj ponownie.');
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
          <h2 className="title">Rejestracja</h2>
          {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '16px' }} />}
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Proszę podać imię!' }]}
              className="form-item"
            >
              <Input placeholder='Imię' />
            </Form.Item>

            <Form.Item
              name="surname"
              rules={[{ required: true, message: 'Proszę podać Nazwisko!' }]}
              className="form-item"
            >
              <Input placeholder='Nazwisko' />
            </Form.Item>

            <Form.Item
              name="gender"
              rules={[{ required: true, message: 'Proszę wybrać Płeć!' }]}
              className="form-item"
            >
              <Select placeholder='Płeć'>
                <Select.Option value="male">Mężczyzna</Select.Option>
                <Select.Option value="female">Kobieta</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Proszę podać nazwę użytkownika!' }]}
              className="form-item"
            >
              <Input placeholder='Nazwa użytkownika' />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Proszę podać e-mail!' }, { type: 'email', message: 'Proszę podać prawidłowy e-mail!' }]}
              className="form-item"
            >
              <Input placeholder='E-Mail' />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Proszę podać hasło!' }]}
              className="form-item"
            >
              <Input.Password placeholder='Hasło' />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Proszę powtórzyć hasło!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Hasła nie są takie same'));
                  },
                }),
              ]}
              className="form-item"
            >
              <Input.Password placeholder='Powtórz hasło' />
            </Form.Item>
            <div className='submit-container'>
              <Form.Item className='button-container'>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Zarejestruj
                </Button>
              </Form.Item>
              <p className=''>Masz już konto? <Link to="/signIn"><b>Zaloguj się.</b></Link></p>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default SignUp;