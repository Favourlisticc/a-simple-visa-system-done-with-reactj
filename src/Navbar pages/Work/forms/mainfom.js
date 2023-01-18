import React from "react";
import { useState } from "react";
import useForm from "./useform";
import validate from "./validate";
import './mainform.css'


function MyForm() {
const { handleChange, values, handleSubmit, errors} = useForm(validate)

  return (
    <form onSubmit={handleSubmit} className="form">
      
      <div className="forminput">
      <label><b>Enter your Name</b><span> (required)</span></label><br/>
      <input
      id="name"
          type="text" 
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="forminput">
        <label><b>Email</b><span> (required)</span></label><br/>
        <input
        id="email"
          type="email" 
          name="email"
          value={values.email}
          onChange={handleChange}
        />
         {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="forminput">
        <label><b>Country</b> <span> (required)</span></label><br/>
        <input
        id="password"
          type="text" 
          name="coutry"
          value={values.country}
          onChange={handleChange}
        />
         {errors.country && <p>{errors.country}</p>}
      </div>
      <div>
        <label><b>Gender</b><span> (required)</span></label><br/>
        <input id="Male"type="radio" value="Male" name="gender" /> Male<br/>
        <input type="radio" value="Female" name="gender" /> Female<br/>
      </div>
      <div>
        <label><b>Age</b> <span> (required)</span></label><br/>
        <input id="age"type="radio" value="18-25" name="Age" /> 18-25<br/>
        <input id="age"type="radio" value="26-35" name="Age" /> 26-35<br/>
        <input id="age"type="radio" value="36-50" name="Age" /> 36-50e<br/>
        <input id="age"type="radio" value="Above 50" name="Age" /> Above 50
      </div>
      <div>
        <label><b>Have You Ever Applied For A Canadian or Australian Visit Visa</b> <span> (required)</span></label><br/>
        <input id="yes/no" type="radio" value="Yes" name="yes/no" /> Yes<br/>
        <input id="yes/no"  type="radio" value="No" name="yes/no" /> No
      </div>
      <div>
        <label><b>What Language Do You Speak</b> <span> (required)</span></label><br/>
        <input id="Language"type="radio" value="English" name="Language" /> English<br/>
        <input id="Language"type="radio" value="French" name="Language" />French<br/>
        <input id="Language"type="radio" value="Both" name="Language" /> Both<br/>
        <input id="Language"type="radio" value="Others" name="Language" /> Others<br/>
      </div>

      <button type="submit">
            submit
      </button>
    </form>
  )
}

export default MyForm;