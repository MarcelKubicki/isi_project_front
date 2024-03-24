import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn'; // Importowanie modułu Login z pliku Login.js
import SignUp from './SignUp'; // Importowanie modułu Login z pliku Login.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
        {/* Dodaj inne ścieżki w Switchu, jeśli są potrzebne */}
      </Routes>
    </Router>
  );
}

export default App;