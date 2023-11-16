

import React, { useState } from 'react';
import  './FormInput.css';

const FormInput = (props) => {
  const[focused,setFocused]= useState(false);
  const {label,errorMassage,onChange,id,...inputProps}=props;
  
  const handelFocus =   (e) =>{
    setFocused(true);
  };
  return (


    <div className='forminput'>
      
     


      <input 
      {...inputProps}  
       onChange={onChange}
       required  
       onBlur={handelFocus} 
       onFocus={()=>inputProps.name=="confirmPassword"&& setFocused(true)}
       focused={focused.toString()}
       />



      <span >{errorMassage}</span>
    </div>
  );
}

export default FormInput;
