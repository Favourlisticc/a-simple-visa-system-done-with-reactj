import React from "react";
import './navbar.css'
import cti from './imgs/cti-logo.png';
import { Link } from "react-router-dom";
import {useState} from "react";


function Nabar() {
  const [click, setClick] = useState(false)

  const handleClick = ()=> setClick(!click);



    return(
      <div className='forimg'>
<div className='imgg'>
        <img src={cti} alt="Our-Logo"/>
        <h3 className='h33'>Travel and Immigration</h3>
     </div>
<section  className={click ? 'nav-a-mobile' : 'nav-a'}>
     

     <Link to='/'> <button className='btn'>Home</button> </Link>
    <div class="dropdown">
        <Link to='/businessvisa'> <button className='btn'>Work <i class="fas fa-solid fas fa-angle-down"></i></button> </Link>
    <div class="dropdown-content">
        <Link to="/businessform">Apply for Business Visa</Link>
        <Link to="/workpermit">Apply for Work Permit</Link>
    </div>
    </div>
    <div class="dropdown">
      <Link to='/permanentresidence'> <button className='btn'>Immigration <i class="fas fa-solid fas fa-angle-down"></i></button> </Link>
      <div class="dropdown-content">
          <Link to="/permanentresidence">Permanent Residence</Link>
          <Link to="/permanentresidenceForm">Apply from your Company</Link>
         
      </div>
    </div>
    <div class="dropdown">
    <Link to='/studyvisa'> <button className='btn'>Study <i class="fas fa-solid fas fa-angle-down"></i></button> </Link>
    <div class="dropdown-content">
          <Link to="/studyform">Apply for Study Visa</Link>
      </div>
    </div>
    <div class="dropdown">
        <Link to='/touristvisa'> <button className='btn'>Tourist Visa <i class="fas fa-solid fas fa-angle-down"></i></button> </Link>
        <div class="dropdown-content">
          <Link to="/touristform">Apply for a Travel Visa</Link>
          <Link to="/touristform">Apply for a Tourist Visa</Link>

      </div>
    </div>
  
    <Link to='/'> <button className='btn'>About-Us</button> </Link>
    <Link to='/contactus'><button className='btn'>Contact-Us</button> </Link>
    
{/* click bar here */}
<section  onClick={handleClick} className="handleclick">
      <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
     </section>
     
    
   </section>
{/* Endind of navbar */}

   

  </div>
    )
}
export default Nabar;