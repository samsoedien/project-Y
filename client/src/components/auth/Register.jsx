import React, { useState } from 'react';

const Register = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log('passwords do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={e => onSubmit(e)} noValidate autoComplete="off">
        <input
          type="name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="password"
          placholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="password"
          placholder="Confirm Password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={e => onChange(e)}
          required
        />
        <button type="submit" value="Submit">Signup</button>
      </form>
    </div>
  );
};

export default Register;
