import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className='navbar navbar-expand-lg px-4 shadow-sm'>
      <span className='navbar-brand fw-bold text-white'>Account Manager</span>

      <div className='ms-auto'>
        {/* If user is NOT logged in */}
        {!isAuthenticated() ? (
          <>
            <Link to='/' className='btn btn-outline-light me-2'>
              Login
            </Link>
            <Link to='/register' className='btn btn-light'>
              Register
            </Link>
          </>
        ) : (
          /* If user IS logged in */
          <button
            className='btn btn-light'
            onClick={() => {
              logout();
              navigate('/');
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
