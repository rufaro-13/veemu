import React from 'react'
import inclusion from '../images/african-social-worker-helping-senior-woman.jpg'
import {Helmet} from 'react-helmet-async'
function Shared() {
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
                Shared Lives:</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-8 ">
            <div class="md:w-1/2 col-span-1 px-2 ">
                <img class="rounded-lg md:h-full" src={inclusion}  alt="" />
            </div>
            <div class="md:w-1/2  sm:82 rounded-lg   text-fuchsia-950 sm:items-center sm:justify-center  mx-2 ">      
                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                    <p>
                    Shared Care
                    </p>
                </h5>
                <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                    <p className='rounded-lg text-left '>
                    
                
                        Shared lives is a care and support service for adults who want to live independently in their comuunity.
                            Our service involves matching you with an approved Shared Lives Carer and sharing your home and family life.
                            <br/><br/>
                            Support you may receive include
                            <ul class="list-disc ml-6">
                                <li>Supporting you with hobbies and activities, a job or volunteering.</li>
                                <li>Helping you to get appointmrmnts and manage your medication.</li>
                                <li>Helping you to find out what's available in your local community</li>  
                                                                    
                            </ul>

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

export default Shared