import React from 'react'
//import { useState } from 'react';
//import VacancesSection from '../components/VacancesSection';
import applform from '../images/Application for employment.pdf'

function Vacances() {

/*     const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }; */
  return (
    <div class="md:container md:mr-16 md:ml-16 pt-2">

        
        <div class=" sm:items-center sm:justify-center mx-8 mt-2 px-5">
          
        

            <div class=" sm:items-center sm:justify-center md:mr-16 md:ml-16 mt-2 px-5">

            <div class="text-center font-semibold py-4 text-3xl">
                  <p class="relative inline-block pb-3 text-red ct-animate-blink">
                  <i>Vacancies</i>
                      <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                  </p>
              </div>

              <div class="text-center font-semibold py-4 text-3xl">
                  <p class="relative inline-block pb-3 text-fuchsia-900 ">
                  Care worker position
                      
                  </p>
              </div>

            <p class="text-1xl">
           
              We are currently seeking motivated individuals to join our team and assist us in delivering exceptional home care experiences.

              We are pleased to announce that we have an open position for a <span className='font-bold text-fuchsia-900'>Care Worker</span> role that provides flexible working hours for both 
              full-time and part-time employees. The selected candidates will receive comprehensive training to ensure their success in this 
              role. 

            </p>
            <br/>
           </div>

           <div class="">
           
{/*             <VacancesSection/> */}
            <div class='text-center py-4'>
            <p  class="relative font-semibold inline-block pb-3">
              Please download an <a href={applform} class="text-blue-700 hover:underline" download="Application form">application form</a> and send to <a class="text-blue-700" href="mailto:recruitment@veemuhealthcare.co.uk" >recruitment@veemuhealthcare.co.uk</a> 
            </p></div>
           </div> 

       


        </div>

    </div>
  )
}

export default Vacances