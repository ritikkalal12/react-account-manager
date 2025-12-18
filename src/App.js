import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { isAuthenticated } from './utils/auth';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Protected Route */}
        <Route
          path='/profile'
          element={isAuthenticated() ? <Profile /> : <Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  );
}
