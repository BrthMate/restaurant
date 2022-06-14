import { useState, useEffect ,React} from 'react'
import "./form.css"

const Form = () => {

  const initValues = {reason:"",fname:"",lname:"",email:"",phone:"",message:""}
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEvent = (e) =>{
    const {name, value} = e.target;
    setValues({...values, [name]:value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  const validate = (e) => {
    const errorsJson = {};
    
    const regexEmail =  /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/i;
    const regexText = /^[a-zA-Z]+$/;
    const regexNumber = /^[0-9]+$/;
    
    Object.keys(values).map(key =>{
      if(!values[key]){
        errorsJson[key] = "This field is required";
      }
    })

    if(!regexText.test(e.reason) && !errorsJson.reason){
      errorsJson.reason = "This field is not valid";
    }
    if(!regexText.test(e.fname)  && !errorsJson.fname){
      errorsJson.fname = "This field is not valid";
    }
    if(!regexText.test(e.lname)  && !errorsJson.lname){
      errorsJson.lname = "This field is not valid";
    }
    if(!regexEmail.test(e.email)  && !errorsJson.email){
      errorsJson.email = "This field is not valid email format";
    }
    if((!regexNumber.test(e.phone) && !errorsJson.phone) || (e.phone.length!=11 && !errorsJson.phone)){
      errorsJson.phone = "This field is not a valid phone number or the length is insufficient";
    }
    if(!regexText.test(e.message)  && !errorsJson.message){
      errorsJson.message = "This field is not valid";
    }
    
    return errorsJson;
  };

  useEffect(() => {
    if(Object.keys(errors).length == 0 && isSubmit){

    }
  }, [errors])
  

  return (
    <div className='form-box'>
        <form onSubmit={handleSubmit}>
            <label >reason for request:</label>
            <input type="text" id="reason" onChange={handleEvent} value={values.reason} name="reason" />
            <p>{errors.reason}</p>
            <label >First name:</label>
            <input type="text" id="fname" onChange={handleEvent} value={values.fname} name="fname" />
            <p>{errors.fname}</p>
            <label>Last name:</label>
            <input type="text" id="lname" onChange={handleEvent} value={values.lname} name="lname" />
            <p>{errors.lname}</p>
            <label >Email Address:</label>
            <input type="email" id="email" onChange={handleEvent} value={values.email} name="email" />
            <p>{errors.email}</p>
            <label >Phone Number:</label>
            <input type="text" id="phone" onChange={handleEvent} value={values.phone} name="phone" />
            <p>{errors.phone}</p>
            <label >Your Message:</label>
            <textarea type="text" id="message" onChange={handleEvent} value={values.message} name="message" />
            <p>{errors.message}</p>
            <div className='d-flex'>
              <button className="btn-reverse from-center" type='sumbit'>submit</button>
              <span>By clicking Submit, you agree to the terms of our Privacy Policy.</span>
            </div>
        </form>
    </div>
  )
}

export default Form