import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <ConfigProvider
    theme={
      { token: 
      { colorPrimary: '#33586d' }
      }}>
      <Router>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;