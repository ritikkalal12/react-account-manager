import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail } from '../utils/validators';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  // Validate login fields
  const validate = () => {
    const err = {};

    if (!form.email) err.email = 'Email is required';
    else if (!isValidEmail(form.email)) err.email = 'Invalid email format';

    if (!form.password) err.password = 'Password is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) return;

    const storedUser = localStorage.getItem('registeredUser');

    if (!storedUser) {
      setErrors({ general: 'Please register first' });
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email !== form.email || user.password !== form.password) {
      setErrors({ general: 'Invalid email or password' });
      return;
    }

    // Save logged-in user
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to profile
    navigate('/profile');
  };

  return (
    <div className='auth-wrapper'>
      <form className='auth-card' onSubmit={submit} noValidate>
        <h4 className='text-center mb-4'>Welcome Back</h4>

        {errors.general && (
          <div className='alert alert-danger'>{errors.general}</div>
        )}

        <input
          className={`form-control modern-input ${
            errors.email && 'is-invalid'
          }`}
          placeholder='Email'
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <small className='text-danger'>{errors.email}</small>}

        <input
          type='password'
          className={`form-control modern-input ${
            errors.password && 'is-invalid'
          }`}
          placeholder='Password'
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && (
          <small className='text-danger'>{errors.password}</small>
        )}

        <button className='btn primary-btn w-100 mt-3'>Login</button>
      </form>
    </div>
  );
}
