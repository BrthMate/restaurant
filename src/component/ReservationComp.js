import { useState, useEffect ,React} from 'react'
import PlaceData from './data/PlaceData'
import "./reservation.css"
const ReservationComp = () => {
  
  const initValues = {place:"",date:"",time:"",name:""}
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
    
    const regexText = /^[a-zA-Z\ \']+$/;
    const regexNumber = /^[0-9]+$/;
    
    Object.keys(values).map(key =>{
      if(!values[key]){
        errorsJson[key] = "This field is required";
      }
    })

    if(!regexText.test(e.name)  && !errorsJson.name){
      errorsJson.name = "This field is not valid";
    }

    return errorsJson;
  };

  useEffect(() => {
    if(Object.keys(errors).length == 0 && isSubmit){

    }
  }, [errors])
  
  return (
    <>
      <form  onSubmit={handleSubmit} className='reservation-form'>
          <label >Choose place:</label>
          <div className='box'>
            <select  onChange={handleEvent} name="place" className="place-select">
                <option value="">Choose place</option>
                {PlaceData.map((row,index) =>{
                  return(<option key={index} value={row.name}>{row.name}</option>)
                })} 
            </select>
          </div>
          <p>{errors.place}</p>
          <label >choose a date:</label>
          <input type="date" onChange={handleEvent} name="date"></input>
          <p>{errors.date}</p>
          <label >choose a time:</label>
          <input type="time" onChange={handleEvent} name="time" value={values.time}></input>
          <p>{errors.time}</p>
          <label >Name:</label>
          <input type="text" onChange={handleEvent} name="name" value={values.name}></input>
          <p>{errors.name}</p>
          <button className="btn-reverse from-center" type='sumbit'>Reservation</button>
        </form>
    </>
  )
}

export default ReservationComp