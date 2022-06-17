import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SigninPage setUser={setUser} />} exact />
        <Route path='/signup' element={<SignupPage />} exact />
        <Route element={<PrivateRoute user={user} />}>
          <Route path={`/${user}`} element={<Home user={user} />} exact />
        </Route>
        <Route path='*' element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
