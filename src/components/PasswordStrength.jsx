// Simple password strength indicator
export default function PasswordStrength({ password }) {
  const strength =
    password.length > 8 ? 'Strong' : password.length > 4 ? 'Medium' : 'Weak';

  const color =
    strength === 'Strong'
      ? 'bg-success'
      : strength === 'Medium'
      ? 'bg-warning'
      : 'bg-danger';

  if (!password) return null;

  return (
    <div className='mt-2'>
      <div className='progress' style={{ height: '6px' }}>
        <div className={`progress-bar ${color}`} style={{ width: '100%' }} />
      </div>
      <small className='text-muted'>Password strength: {strength}</small>
    </div>
  );
}
