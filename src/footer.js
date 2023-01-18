import React  from "react";
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return(
    <div>
        <div className='footer'>
          <div className='footer-visa'>
             <h2>VISAS</h2>
             <Link to='/businessvisa'><i class="fas fa-solid fas fa-angle-right"></i>Work Visa</Link><br/>
             <Link to='/StudyVisa'><i class="fas fa-solid fas fa-angle-right"></i>Study Visa</Link><br/>
             <Link to='/businessform'><i class="fas fa-solid fas fa-angle-right"></i>Business Visa</Link><br/>
             <Link to='/touristvisa'><i class="fas fa-solid fas fa-angle-right"></i>Tourist Visa</Link><br/>
             <Link to='/touristform'><i class="fas fa-solid fas fa-angle-right"></i>Family Visa</Link><br/>
             <Link to='/permanentresidence'><i class="fas fa-solid fas fa-angle-right"></i>Permanent Residency</Link>
           </div>
           <div className='footer-contact'>
             <h2>Contact</h2>
            <a href='gmail.com/favourbee200@gmail.com'>CanadaVisa@gmail</a>
            <h3>Address</h3>
             <p>215 Seaton St, Toronto, <br/>ON M5A 2T5, Canada</p>
          </div>
          <div className='footer-connect'>
              <h2>Connect</h2>
              <a href='./https://instagram.com/djon_xxd?igshid=YmMyMTA2M2Y=' style={{color:'rgb(239, 116, 116)'}}><i class="fa fa-instagram social-icon"></i>instagram</a><br/>
              <a href='/'  style={{color:'green'}}><i class="fa fa-whatsapp social-icon"></i>whatsapp</a><br/>
              <a href='/'style={{color:'skyblue'}}><i class="fa fa-twitter social-icon"></i>Twitter</a>

          </div>
        </div>
        <div className='footer-below'>
            <h1>Copyright © 2022</h1>
            <h2>Powered by Canada&Australia Travel And Immigration Agency</h2>
       </div>
    </div>
    )
}
export default Footer;
