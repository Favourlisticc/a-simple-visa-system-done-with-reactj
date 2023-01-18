import React from "react";
import './touristvisa.css'
import Touristvisa from './imgs/tourist.jpg'
import { Link } from "react-router-dom";

function Touuristvisa() {
    return(
        <div className="touristvisa">
            <h1>TOURIST VISA</h1>
            <img src={Touristvisa} alt='Tourisyvisa' />
            <p>A visitor visa (also called a temporary resident visa) is an official document that we stick in your passport. It shows that you meet the requirements needed to enter Canada.</p>

<p>Most travellers need a visitor visa to travel to Canada. You may also need one if you’re transiting through a Canadian airport on your way to your final destination.</p>

<p>You can apply for a visitor visa online or on paper</p>


<p>Most visitors can stay for up to 6 months in Canada.</p>

<p>At the port of entry, the border services officer may allow you to stay for less or more than 6 months. If so, they’ll put the date you need to leave by in your passport. They might also give you a document, called a visitor record, which will show the date you need to leave by.</p>

<p>If you don’t get a stamp in your passport, you can stay for 6 months from the day you entered Canada or until your passport expires, whichever comes first. If you need a stamp, you can ask a border services officer for one. If you arrive at an airport that uses primary inspection kiosks, ask the border officer after you finish at the kiosk.</p>

<h1>Eligibility</h1>

<p>You must meet some basic requirements to get a visitor visa. You must:</p>

<p>Have a valid travel document, like a passport<br/>
Be in good health<br/>
Have no criminal or immigration-related convictions<br/>
Convince an immigration officer that you have ties—such as a job, home, financial assets or family—that will take you back to your home country<br/>
Convince an immigration officer that you will leave Canada at the end of your visit<br/>
have enough money for your stay<br/>
The amount of money you will need depends on how long you will stay and if you will stay in a hotel, or with friends or relatives.<br/>
You may also need a medical exam and letter of invitation from someone who lives in Canada.</p>

<p>Check the list of documents you need based on your situation.</p>

<p>Some people are not allowed to enter Canada<br/>
Some people are not admissible to Canada, which means they are not allowed to enter the country. You can be inadmissible for several reasons, including being involved in:</p>

<p>Criminal activity<br/>
Human rights violations<br/>
Organized crime<br/>
You can also be inadmissible for security, health or financial reasons.</p>

<Link to='touristform'>
          <button>Proceed to Apply for a Tourist Visa</button>
        </Link>
        </div>
    )
}
export default Touuristvisa;