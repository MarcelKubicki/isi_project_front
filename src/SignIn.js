import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './AuthForm.css'; // Importowanie stylów

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Tutaj można dodać logikę przetwarzania danych logowania
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='webPage'>
      <div className="container">
        <h2 className="title">Logowanie</h2>
        <Form
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
                <p><Link to="/signUp">Nie pamiętasz hasła?</Link></p>
              </div>
          </div>


          <div className='submit-container'>
            <Form.Item className='button-container'>
              <Button type="primary" htmlType="submit">
                Zaloguj
              </Button>
            </Form.Item>
            <p>Nie masz konta? <Link to="/signUp">Dołącz do nas!</Link></p>
          </div>
        </Form>
      </div>
    </div>

  );
};

export default SignIn;