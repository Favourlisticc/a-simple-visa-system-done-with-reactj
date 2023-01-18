import React from "react";
import './permanentvisa.css';
import Permanentvisa from './imgs/permanentresidence.png'
import { Link } from "react-router-dom";

function Permanentresidence() {
    return(
        <div className="permanentvisa">
            <h1>Permanent Residence</h1>
            <img src={Permanentvisa} alt='image' />
                <p>You can only apply for permanent residence through Express Entry if you’ve received an invitation to apply.</p>

<p>Once you have your invitation to apply<br/>
There have been some changes to the way we process applications because of COVID-19. Find out how you’re affected.</p>

<p>Your Express Entry invitation to apply is valid for 60 days only. You should start filling out the online form right away so that you can get all the information and documents you need before your invitation expires.</p>

<p>When filling out the form:</p>

<p>Make sure you submit all of the required documents.<br/>
All of your answers must be complete and true.<br/>
Make sure all the mandatory fields are completed, or you won’t be able to submit your application.<br/>
You can save your information on the form and go back as often as you need to.</p>
        
<Link to='permanentresidenceForm'>
          <button>Proceed to Apply for a Study Visa</button>
        </Link>
        </div>
    )
}
export default Permanentresidence;