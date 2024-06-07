import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HomePage from './HomePage';

function App() {
  return (
    <ConfigProvider
    theme={
      { token: 
      { colorPrimary: '#33586d' }
      }}>
      <Router> 
        <Routes>
          <Route path="/" element={<Navigate to="/signIn" replace/>} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;