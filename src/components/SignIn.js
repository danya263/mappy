import './Sign.css';
import FormInput from './FormInput';
import React, { useState } from 'react';





const SignIn = () => {
   
    const [values, setValues] = useState({
        email: "",
      password: "",
    
    });

    const inputs = [
        {id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMassage: "wrong email",
            label: "Email",
            /*pattern:*/
          },
          {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMassage: "wrong password !!",
            label: "Password",
          /*  pattern: ,*/
          },];
          const handleSubmit = (e) => {
            e.preventDefault();
            
            console.log(values);
          };
          const onChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          };
          return (
            <div className='sign'>
              <form onSubmit={handleSubmit} >
                <h1>SignIn</h1>
        
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                 />))}
                
        
                <button className="submit-btn">Submit</button>
              </form>
            </div>
          );
        };
        
        export default SignIn;