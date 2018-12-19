import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';

export const renderPhone = ({input, type, className, defaultCountry, meta}) =>{
  return <ReactPhoneInput {...input} defaultCountry={'us'} placeholder="Login with your Smartphone" inputExtraProps={{name: 'contact_number'}} inputClass={ (meta.error && meta.touched) ? className + ' is-invalid' : className} />
}

export const renderPhoneRegister = ({input, meta, ...rest}) =>{
  return <ReactPhoneInput {...rest} countryCodeEditable={false} autoFormat={true} defaultCountry={'us'} inputExtraProps={{name: 'contact_number'}} inputClass={ (meta.error && meta.touched) ? 'form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md is-invalid' : "form-control font-16 bord-gray pl-4 pr-4 input-hgt-lg input-hgt-md"} />
}

export const renderinput = ({input, type, className, placeholder, meta}) =>{
  return <input {...input} className={ (meta.error && meta.touched) ? className + ' is-invalid' : className} type={type} placeholder={placeholder} />    
}
