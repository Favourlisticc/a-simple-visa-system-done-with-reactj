import React from "react";
import './businessvisa.css';
import { Link } from "react-router-dom";
import Businessvisapic from './imgs/business-visa.jpg'

function BusinessVisa() {
    return(
        <div>
            <div className="turnblack"></div>
        <div className="thebody">
            
            <h2>Work</h2>
            <img src={Businessvisapic} alt=''/>
            

<p>Most foreign nationals need a work permit to work in Canada. If you’re not sure, you can find out if you need a work permit.</p>

<p>Get the right work permit for your situation. <br/>There are 2 types of work permits.</p>

<p>Employer-specific work permit <br/>
An employer-specific work permit lets you work in Canada according to the conditions on your work permit, such as:</p>

<p>The name of the specific employer you can work for<br/>
How long you can work<br/>
The location where you can work (if applicable)</p>

<p>Before you submit your application for an employer-specific work permit, the employer who wants to hire you must complete certain steps and give you either a copy of a Labour Market Impact Assessment or an offer of employment number to include in your application.</p>

<p>Open work permit<br/>
An open work permit lets you work for any employer in Canada, except for one that:</p>

<p>Is listed as ineligible on the list of employers who have failed to comply with the conditions or<br/>
regularly offers striptease, erotic dance, escort services or erotic massages<br/>
You can only get an open work permit in specific situations.</p>

<h1>Eligibility Requirements For All Applicants</h1>
<p>There are specific requirements you need to meet depending on where you are when you apply for your work permit.</p>

<p>But regardless of where you apply or which type of work permit you apply for, you must</p>

<p>Prove to an officer that you will leave Canada when your work permit expires;<br/>
Show that you have enough money to take care of yourself and your family members during your stay in Canada and to return home;<br/>
Obey the law and have no record of criminal activity (we may ask you to give us a police clearance certificate);<br/>
Not be a danger to Canada’s security;<br/>
Be in good health and have a medical exam, if needed;<br/>
Not plan to work for an employer listed with the status “ineligible” on the list of employers who failed to comply with the conditions; <br/>
Not plan to work for an employer who, on a regular basis, offers striptease, erotic dance, escort services or erotic massages; and <br/>
Give the officer any other documents they ask for to prove you can enter the country.</p>
        <Link to='businessform'>
          <button>Proceed to Apply for a Work Visa</button>
        </Link>
        </div>
        </div>
    )
}

export default BusinessVisa;