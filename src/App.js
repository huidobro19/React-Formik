import React from 'react';
import './App.css';
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      alert('Login Successful');
    },
    validate: values =>{
      let errors = {};

      if(!values.email) {
        errors.email = 'Field Required';
      } else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
        errors.email = 'Username should be an email';
      }

      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input  id='emailField' type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input id='pswField' type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id='psdError' style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id='submitBtn' type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;
