import React from 'react'
import inclusion from '../images/2149741230.jpg'
import {Helmet} from 'react-helmet-async'
function Live() {
  return (
    <div>

         <Helmet>
            <title>Shared Care</title>
            <meta name="description" content="See our detailed shared care services"/>
            <link rel="canonical" href="/shared" />
        </Helmet>
        <section>
        <section class=" bg-cover bg-center bg-no-repeat  bg-gray-200  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-16 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">
                Live In Care:</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-5 ">
            <div class="md:w-1/2 col-span-1 px-2 ">
                <img class="rounded-lg md:h-full" src={inclusion}  alt="" />
            </div>
            <div class="md:w-1/2  sm:82 rounded-lg   text-fuchsia-950 sm:items-center sm:justify-center  mx-2 ">      
                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                    <p>
                    Live in Care
                    </p>
                </h5>
                <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                    <p className='rounded-lg text-left '>

                <span className='font-semibold'>Live-in care involves having a dedicated carer living with you, providing 24/7 assistance whenever needed.</span>
                    <br/><br/>

                    Veemu Health Care provides an exceptional live-in care service that enables individuals to receive high-quality care while 
                    remaining in the comfort of their own homes. This service is especially useful for those who require continuous care and an 
                    elevated level of support, such as those with chronic illnesses or disabilities but prefer not to relocate to a care home.
                    <br/><br/>
                    Live-in care refers to the arrangement in which a dedicated carer resides with you in your own home, providing continuous assistance 
                    day or night whenever required. By having a caregiver on-site at all times, our live-in care service can provide you with a greater 
                    sense of security and comfort for you in need of assistance. The carer may assist with a variety of activities of daily living, 
                    including but not limited to, meal preparation, medication management, and personal care. Overall, our live-in care service can 
                    provide you with a personalised, reliable, and compassionate form of care within the comfort of your own home.
                            

                    </p>

                    
                </p>
            </div>
            
        </div>
        </section>
        
        
        </section>

        
        


        </section>
    </div>
  )
}

export default Live