import React from 'react'
import inclusion from '../images/nurse-consoling-old-crying-man.jpg'
import {Helmet} from 'react-helmet-async'
function Extra() {
  return (
    <div>

         <Helmet>
            <title>Extra Care</title>
            <meta name="description" content="See our detailed extra care services"/>
            <link rel="canonical" href="/extra" />
        </Helmet>
        <section>
        <section class=" bg-cover bg-center bg-no-repeat  bg-gray-200  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-16 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">
                Extra Care:</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-8 ">
            <div class="md:w-1/2 col-span-1 px-2 ">
                <img class="rounded-lg md:h-full" src={inclusion}  alt="" />
            </div>
            <div class="md:w-1/2  sm:82 rounded-lg   text-fuchsia-950 sm:items-center sm:justify-center  mx-2 ">      
                <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                    <p>
                    Extra Care
                    </p>
                </h5>
                <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                    <p className='rounded-lg text-left '>
                    
                
                    We provide high quality care and support to adults who have been assessed as having
                    needs that are eligible for social care funding including those arising from varying
                    degrees of physical frailty, learning disability, mental ill health and cognitive impairment
                    including dementia, or a combination of this.
                    <br/><br/>
                    Our care staff are on hand with flexibility of care available 24 hours a day which can be increased or decreased in response
                    to individual needs.
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

export default Extra