import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordStrength from '../components/PasswordStrength';
import { isValidEmail } from '../utils/validators';

export default function Register() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Regex patterns
  const nameRegex = /^[A-Za-z ]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validate all fields
  const validate = () => {
    const err = {};

    // Name validation
    if (!form.name.trim()) {
      err.name = 'Name is required';
    } else if (!nameRegex.test(form.name)) {
      err.name = 'Name can contain only letters and spaces';
    } else if (form.name.length < 2) {
      err.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!form.email) {
      err.email = 'Email is required';
    } else if (!isValidEmail(form.email)) {
      err.email = 'Enter a valid email address';
    }

    // Password validation
    if (!form.password) {
      err.password = 'Password is required';
    } else if (!passwordRegex.test(form.password)) {
      err.password =
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Prevent duplicate registration
    const existing = JSON.parse(localStorage.getItem('registeredUser'));
    if (existing?.email === form.email) {
      setErrors({ email: 'Email already registered' });
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify(form));
    navigate('/');
  };

  return (
    <div className='auth-wrapper'>
      <form className='auth-card' onSubmit={submit} noValidate>
        <h4 className='text-center mb-4'>Create Account</h4>

        {/* Name Field */}
        <input
          className={`form-control modern-input ${errors.name && 'is-invalid'}`}
          placeholder='Full Name'
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <small className='text-danger'>{errors.name}</small>}

        {/* Email Field */}
        <input
          className={`form-control modern-input ${
            errors.email && 'is-invalid'
          }`}
          placeholder='Email'
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <small className='text-danger'>{errors.email}</small>}

        {/* Password Field */}
        <div className='position-relative'>
          <input
            type={show ? 'text' : 'password'}
            className={`form-control modern-input ${
              errors.password && 'is-invalid'
            }`}
            placeholder='Password'
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <i
            className={`bi ${show ? 'bi-eye-slash' : 'bi-eye'} toggle-eye`}
            onClick={() => setShow(!show)}
          />
        </div>
        {errors.password && (
          <small className='text-danger'>{errors.password}</small>
        )}

        {/* Password Strength Indicator */}
        <PasswordStrength password={form.password} />

        <button className='btn primary-btn w-100 mt-4'>Register</button>
      </form>
    </div>
  );
}
