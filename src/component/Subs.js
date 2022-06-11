import { useState, useEffect ,React} from 'react'
import "./sub.css"

const Subs = () => {

  
  const initValues = {email:""}
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEvent = (e) =>{
    const {name, value} = e.target;
    setValues({...values, [name]:value});
    console.log({values})
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  const validate = (e) => {
    const errorsJson = {};
    const regexEmail =  /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/i;
  
    if(!e.email){
      errorsJson.email = "This field is required";
    }

    else if(!regexEmail.test(e.email)){
      errorsJson.email = "This field is not valid email format";
    }

    return errorsJson;
  };

  useEffect(() => {
    if(Object.keys(errors).length == 0 && isSubmit){
      console.log("siker")
    }
  }, [errors])
  

  return (
    <div className='subs-container'>
        <h1>Subscribe to our newsletter</h1>
        <span>Join our newsletter to receive the latest industry news, updates and insights from our team.</span>
        <form onSubmit={handleSubmit}>
            <div>
              <input type="email" placeholder='Your Email Address' value={values.email} onChange={handleEvent} name="email"></input>
              <p>{errors.email}</p>
            </div>
            <button className="btn-reverse from-center btn-sub">Subscribe</button>
        </form>
    </div>
  )
}

export default Subs