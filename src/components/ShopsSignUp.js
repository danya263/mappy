import './Sign.css';
import FormInput from './FormInput';
import React, { useState } from 'react';





const ShopsSignUp = () => {
   
    const [values, setValues] = useState({
      
        ShopName:" ",
        Description:" ",
        OunerUserId:" ",
        PhoneNumber:" ",
    
    });

    const inputs = [
        {id: 1,
            name: "shopName",
            type: "text",
            placeholder: "Shop Name",
           /* errorMassage: "",*/
            label: "Shop Name",
            /*pattern:*/
          },
          {
            id: 2,
            name: "description",
            type: "text",
            placeholder: "Description",
            /*errorMassage: "",*/
            label: "Description",
          /*  pattern: ,*/
          },
          {
          id: 3,
            name: "phoneNumber",
            type: "text",
            placeholder: "PhoneNumber",
              errorMassage: "invalid number",
            label: "Phone Number",
            pattern:"^[0-9]{7,10}$"

          },
          
        
        
        ];
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
                <h1> SHOP SIGN UP</h1>
        
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                 />))}
                
                <button className="Address">Address</button>
                <button className="submit-btn">Submit</button>
              </form>
            </div>
          );
        };
        
        export default ShopsSignUp;