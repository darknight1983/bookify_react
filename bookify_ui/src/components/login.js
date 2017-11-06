import React from 'react';
import '../css/login.css';


const Login = () => {
  return (
    <form method="POST">
      <div class="login-info">
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Login;
