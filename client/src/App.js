import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const user = useSelector(state => state.user)
  
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SigninPage />} exact />
        <Route path='/signup' element={<SignupPage />} exact />
        <Route element={<PrivateRoute />}>
          <Route path={`/${user}`} element={<Home />} exact />
        </Route>
        <Route path='*' element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
