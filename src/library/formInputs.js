import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';

export const renderPhone = ({input, type, className, defaultCountry, meta}) =>{
  return(
        <div>
           <ReactPhoneInput {...input} defaultCountry={'us'} placeholder="Login with your Smartphone" inputExtraProps={{name: 'contact_number'}} inputClass={ (meta.error && meta.touched) ? className + ' is-invalid' : className} />
        </div>
      )
}

export const renderinput = ({input, type, className, placeholder, meta}) =>{
  return(
        <div>
          <input {...input} className={ (meta.error && meta.touched) ? className + ' is-invalid' : className} type={type} placeholder={placeholder} />
        </div>
      )
}