import './Sign.css';
import FormInput from './FormInput';
import React, { useState } from 'react';

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [values, setValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    ruleID: "", // Include a property for the role
  });

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    // Update the role in the 'values' state
    setValues({ ...values, ruleID: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text", // Use "text" for the type
      placeholder: "User Name",
      errorMassage: "Username must be 3-16 characters without special characters!",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMassage: "First name must consist of letters only",
      label: "First Name",
      pattern: "^[A-Za-z]{0,16}$",
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMassage: "Last name must consist of letters only",
      label: "Last Name",
      pattern: "^[A-Za-z]{0,16}$",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMassage: "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character!",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,20}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMassage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password, // Use values.password for the pattern
    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMassage: "Please enter a valid email address",
      label: "Email",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Role:', selectedRole);
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='sign'>
      <form onSubmit={handleSubmit} >
        <h1>SignUp</h1>

        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
         />))}
        

        <select onChange={handleRoleChange} value={selectedRole}>
          <option value="">Select a role</option>
          <option value="1">Admin</option>
          <option value="2">Owner</option>
          <option value="3">User</option>
        </select>

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
