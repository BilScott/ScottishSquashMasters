import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const authError = isSignup
      ? await signup(email, password)
      : await login(email, password);
    if (authError) setError(authError.message);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '40px auto' }}>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={{ width: '100%', marginBottom: 8, padding: 8 }}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={{ width: '100%', marginBottom: 8, padding: 8 }}
      />
      <button type="submit" style={{ width: '100%', marginBottom: 8 }}>
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
      <button
        type="button"
        onClick={() => setIsSignup(!isSignup)}
        style={{ width: '100%' }}
      >
        {isSignup ? 'Have an account? Login' : 'No account? Sign Up'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
    </form>
  );
}

export default Login;