import React from "react";
import './study.css'
import Studyimg from './imgs/Study-permit-2.jpg'
import { Link } from "react-router-dom";

function Study() {
    return(
        <div className="studyform">
           <h1>Study</h1>
           <img src={Studyimg} alt='image'/>
           <p>The study permit is a document we issue that allows foreign nationals to study at designated learning institutions (DLI) in Canada. Most foreign nationals need a study permit to study in Canada. Make sure you have all the documents you need before you apply. You should apply before you travel to Canada.</p>

<p>Your study permit is not a visa. It doesn’t let you enter Canada. You may also need a visitor visa or an electronic travel authorization (eTA). If we approve your study permit, we’ll issue one to you with your study permit.</p>

<p>How long can you stay in Canada with a study permit?</p>
<p>A study permit is usually valid for the length of your study program, plus an extra 90 days. The 90 days let you prepare to leave Canada or apply to extend your stay.</p>

<p>If you’re taking prerequisite courses</p>
<p>If your school asks you to take courses before they accept you into the main program (you have conditional acceptance), your study permit will be valid for the length of those courses, plus 1 year. When you get accepted into the main program, you must then apply to extend your stay as a student.</p>

<p>If you’ll finish your studies after your study permit expires</p>
<p>If you don’t finish your courses before the date on your permit, you must apply to extend your stay as a student. If you don’t, you’ll need to stop studying and leave Canada.</p>

<p>If you finish your studies before your study permit expires</p>
<p>If you finish your studies early, your permit will stop being valid 90 days after you complete your studies, no matter what day is printed on the study permit.</p>

<p>You’ve completed your studies on the date your school first notifies you by completion letter, transcript, degree or diploma.</p>

<p>You must provide proof of the date your school notifies you, or the date you get your degree, diploma or certificate. If you don’t have proof, we’ll use the earliest issue date on the document. We may confirm this date with your school.</p>

<p>Can you go back home while studying?</p>
<p>Yes. If you leave Canada during your studies, you may need to show proof you’re enrolled in your school when you return to Canada.</p>

<p>If you have a visitor visa or an electronic travel authorization (eTA), it must still be valid when you return to Canada.</p>

<h2>Eligibility Requirements</h2>

<p>You can study in Canada if you:</p>

<p>Are enrolled at a designated learning institution (DLI)<br/>
Prove you have enough money to pay for your:<br/>
Tuition fees<br/>
Living expenses for yourself and any family members who come with you to Canada and<br/>
return transportation for yourself and any family members who come with you to Canada<br/>
Obey the law, have no criminal record and get a police certificate (if required)<br/>
Are in good health and get a medical exam (if required)<br/>
Prove to an officer that you will leave Canada when your study permit expires</p>
        
<Link to='studyform'>
          <button>Proceed to Apply for a Study Visa</button>
        </Link>
        </div>
    )
}
export default Study;