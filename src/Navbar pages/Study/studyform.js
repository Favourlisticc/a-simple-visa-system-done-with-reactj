import React from "react";
import './studyform.css';
import StudyFormimg from './imgs/Studyform.jpg'
import ShowForm from './forms/showform'

function Studyform() {
    return(
        <div className="studyform">
            <h1>APPLY FOR A STUDY VISA</h1>
            <img src={StudyFormimg} alt='studyvisa' />
            <ShowForm />
        </div>
    )
}
export default Studyform;