import { useState } from 'react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState(user.name);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const update = () => {
    if (!name.trim()) {
      setError('Name cannot be empty');
      return;
    }

    const updatedUser = { ...user, name };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    localStorage.setItem('registeredUser', JSON.stringify(updatedUser));

    setError('');
    setMessage('Profile updated successfully');
  };

  return (
    <div className='auth-wrapper'>
      <div className='auth-card'>
        <h4 className='mb-3'>My Profile</h4>

        {message && <div className='alert alert-success'>{message}</div>}
        {error && <div className='alert alert-danger'>{error}</div>}

        <input
          className='form-control modern-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className='form-control modern-input'
          value={user.email}
          disabled
        />

        <button className='btn primary-btn w-100 mt-3' onClick={update}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
