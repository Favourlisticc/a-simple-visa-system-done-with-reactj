import React from "react";
import './businessform.css';
import businessform from './imgs/business-from.jpg';
import ShowForm from './forms/showform'

export default  function BusinessForm(){
    return(
        <div className="business-form">
            <h1>Apply for Business Visa</h1>
            <img  src={businessform} alt='hello'/>
             <ShowForm / >
        </div>
    )
}