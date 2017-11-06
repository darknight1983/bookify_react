import React from 'react';
import '../css/register.css'


class RegisterForm extends React.Component {
  render() {
    return (
      <form action='post'>
        <div className="name-info">
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Enter Your Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Your Password" />
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default RegisterForm;
