import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Tutaj można dodać logikę przetwarzania danych rejestracji
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='webPage'>
      <div className="container"> {/* Dodanie klasy CSS */}
        <h2 className="title">Rejestracja</h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Proszę podać imię!' }]}
            className="form-item"
          >
            <Input placeholder='Imię' />
          </Form.Item>

          <Form.Item
            name="lastName"
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
            rules={[{ required: true, message: 'Proszę podać e-mail!' }]}
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
              <Button type="primary" htmlType="submit">
                Zarejestruj
              </Button>
            </Form.Item>
            <p className=''>Masz już konto? <Link to="/signIn">Zaloguj się.</Link></p>
          </div>
        </Form>

      </div>
    </div>

  );
};

export default SignUp;