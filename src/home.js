import React from "react";
import canadanews from './imgs/canada-news.webp';
import australianews from './imgs/australia-flag.jpg'
import travelnews from './imgs/travel-news.jpg.webp';
import './home'

export default function Home() {
    return(
    <div>
        
        <div className='another-section'>
    <h3>Welcome To</h3>
    <h1>Canada and Australia Travel and Immigration</h1>
    <h4 style={{color:"orange"}}>Do you want to travel to Canada or Australia? Click the Link below!</h4>
      <a href='/'> <button> Get Started</button> </a>
   </div>
       <div className='little-about'>
         <h1>About Us</h1>
         <p style={{padding:"20px 0px"}}>Canada Travel and Immigration is an emerging immigration and visa service provider in Canada, which founded on the 17th of february 2003. Since then we have been fulfilling overseas career dreams…</p>
         <a href='/'> <button>READ MORE...</button> </a>
       </div>
       <div className='process'>
        <div className='immigration'>
          <p>Immigration</p>
          <h1>Canada Removes Pre-Arrival COVID-19<br/> Testing Requirements</h1>
          <hr/>
          <h4>Rules For Fully Vaccinated Travelers</h4>
          <p>Fully vaccinated travellers arriving to Canada will no longer be</p> <p>subject to pre-arrival COVID-19 testing requirements. Fully </p><p>vaccinated travellers may still be randomly selected for post</p><p>-arrival testing but will not have to quarantine while awaiting</p><p> their test result. All travellers must still submit their mandatory</p><p> information in ArriveCAN before they arrive in Canada, and</p><p> travellers who fail to submit the required information may be</p><p>subject to COVID-19 testing and 14-day quarantine requirements</p><p> regardless of vaccination status.</p>
          <hr/>
          <h4>Rules For Unvaccinated Or Partially Vaccinated Travelers</h4>
          <p>Travellers who are not fully vaccinated or are partially vaccinated</p><p> will still be subject to more restrictive travel rules. Unvaccinated</p><p> and partially vaccinated travellers are still unable to board</p><p> flights, trains, or cruise ships departing from Canada or arriving</p><p> to Canada. Unvaccinated and partially vaccinated travellers must</p><p> also take a PCR pre arrival test. Foreign nationals who are</p><p> unvaccinated are not eligible to board a flight to Canada.</p>
          <hr style={{margin: '30px 0px'}}/>
         </div>
        <div className='other-side'>
          <h1>Canada has an immigration <br/> policy you might want to <br/>emulate. They want more <br/>skilled and educated <br/>immigrants. In fact, that's all<br/> they take. But, see, since<br/> nobody's watching them,<br/> and they're not a<br/> superpower, nobody really<br/> cares. So they are allowed to<br/> act in their best interests.</h1>
        </div>
       </div>

         <div className='News'>
            <h1>Latest News</h1>
            <h2>Canada and Australia Immigration Updates</h2>
            <div className='mainNews'>
               <section className='canadanews'>
                 <img src={canadanews} alt="News"/>
                 
                 <h2>Canada landed 300,000 immigrantsin first quarter Of 2022</h2>
                 <p>Obtained by CTI News in an information request to Immigration, Refugees and Citizenship Canada (IRCC), the data shows Canada has gotten off to a strong start as it seeks to welcome over 400,000 new immigrants for the second consecutive year.</p><p>Under its new Immigration Levels Plan 2022-2024, Canada is targeting nearly 432,000 new immigrant landings this year, which would be the highest level in history. Last year Canada landed over 405,000 immigrants, primarily by transitioning those living in the country to permanent residence. It marked a record-breaking year for Canada, and was the first time since 1913 the country landed over 400,000 immigrants.</p>
                 
               </section>
               <section className='travelnews'>
                  <img src={travelnews} alt="News"/>
                 <h2>Fully vaccinated travellers no longer need COVID-19 test to come to Canada</h2>
                 <p>Fully vaccinated travellers no longer need a pre-arrival COVID-19 test to enter Canada.</p><p>Travellers will still need to provide proof of vaccination status and all other mandatory information through the ArriveCAN app, either on desktop or mobile, before crossing the border. Travellers who arrive without completing their ArriveCAN submission may have to test on arrival and quarantine for 14 days, regardless of their vaccination status. Travellers taking a cruise or a plane must submit their information in ArriveCAN within 72 hours before boarding.</p><p>Partially-vaccinated and unvaccinated travellers will still be subject to testing and quarantine requirements</p>

                 <div>
                  
                 </div>
               </section>
               <section className='australianews'>
                 <img src={australianews} alt="News"/>
                 <h2>Australia visa changes for 2022-23, opening up new opportunities for overseas immigrants</h2>

                 <p>Australian government announced the changes in visa rules on July 1, 2022. These changes will open new ways to permanent residency in Australia.</p>
                 <p> Major changes can be observed in Temporary skill shortage visas, Temporary graduate visas, and Working holiday maker visas. The temporary graduate visa holders will be able to apply for a replacement visa for one year and later can convert it to Australian PR.</p>
               </section>
            </div>

         <div>
          <iframe width="800" height="500" src="https://www.youtube.com/embed/rZcPR8NSn3M">All the steps after arrival at Canada airport</iframe></div>
          <iframe width="800" height="500" src="https://www.youtube.com/embed/SVGRNpBUwD0"></iframe>
       </div>
       <h1 className='disclaimer'>DISCLAIMER: ALL PAYMENT INSTRUCTIONS SHOULD BE VALIDATED AT contact@canadaandaustraliatravelandimmigration.com to avoid IMMIGRATION DELAY</h1>

    <div/>
    </div>
       )

}