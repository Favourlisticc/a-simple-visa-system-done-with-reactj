import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './footer';
import BusinessVisa from './Navbar pages/Work/BusinessVisa';
import BusinessForm from './Navbar pages/Work/BusinessVisa-Form';
import Workpermit  from './Navbar pages/Work/work-permit';
import Permanentvisa from './Navbar pages/Immigration/Permanent-residence';
import PermanentvisaForm from './Navbar pages/Immigration/permanent-residence-visa';
import Studyvisa from './Navbar pages/Study/apply-study-visa';
import Studyform from './Navbar pages/Study/studyform';
import Touristvisa from './Navbar pages/Tourist visa/tourist-visa';
import Touristform from './Navbar pages/Tourist visa/touristform';
import Contactus from './contactus';
import Home from './home';


function Mainpage() {
  
    return(
      <div>
      
      <Router>
      <Navbar />
          <Switch>
          <Route path="/"  exact component={props => <Home {...props} />} />
          
            <Route path="/businessvisa" component={props => <BusinessVisa {...props} />} />
            <Route path="/businessform" component={props => <BusinessForm {...props} />} />
            <Route path="/workpermit" component={props =>  <Workpermit {...props}/> } />
            <Route path="/permanentresidence" component={props => <Permanentvisa {...props} />} />
            <Route path="/permanentresidenceForm" component={props => <PermanentvisaForm {...props}/>}/>
            <Route path="/studyvisa" component={props => <Studyvisa {...props}/>} />
            <Route path="/studyform" component={props => <Studyform {...props}/>} />
            <Route path="/touristvisa" component={props => <Touristvisa {...props}/> } />
            <Route path="/touristform" component={props => <Touristform {...props}/> } />
            <Route path="/contactus" component={props => <Contactus {...props}/> } />
            
            </Switch>
        <Footer/>
      </Router>
              

    </div>
    
      )
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Mainpage />);
