import React from 'react'
import domiciliary from '../images/smiley-man-woman-medium-shot.jpg'
import domic from "../images/african-social-worker-helping-senior-woman.jpg"
import paliat from '../images/nurse-consoling-old-crying-man.jpg'
import respite from '../images/side-view-nurse-pushing-disabled-patient-wheel-chair.jpg'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function Domiciliary() {
  return (
    <div>
        <Helmet>
            <title>Domiciliary Care</title>
            <meta name="description" content="See our detailed domiciliary care services"/>
            <link rel="canonical" href="/domiciliary" />
        </Helmet>
        <section>
        <section class=" bg-cover bg-center bg-no-repeat bg-team_work bg-gray-600  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-24 lg:py-34">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">
                Services offered by VEEMU:</h1>
               
                <div class="  md:w-1/2   rounded-lg  text-white   mx-4 ">
                            

                            <p class='font-normal font-semibold text-sm md:text-lg px-2'>
                           We offer a range of services :<br/><br/>
                            <div className='ml-6'><ul class="list-disc ">
                             <li><a class='' href='#domiciliary'><u>Domiciliary Care</u></a></li>
                            <li><a href='#respite'><u>Respite Care</u></a> </li>
                            <li><a href='#supported'><u>Supported Living</u></a></li>
                            <li><a href='#palliative'><u>Palliative Care</u></a></li>
                            
                                
                            </ul></div>
                            
                            <br/><br/>


                            </p>

                        </div> 
               
            </div>
        </section>
            <div class=" px-4 mx-auto max-w-screen-xl t pt-4">

                {/* <div class=" mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="bg-gradient-to-r from-violet-950 to-fuchsia-950 bg-clip-text text-transparent mb-4 text-2xl font-extrabold tracking-tight leading-none text-emerald-800 md:text-3xl lg:text-3xl">
                       Our services:
                    </h4>
                </div> 
 */}
                <div class=" md:flex ">

                <div id='domiciliary' class="md:flex pt-4 pb-4">
                        <div class="md:w-1/2 col-span-1 px-2 pt-2">
                            <img src={domiciliary}class=" rounded-lg md:h-96  mr-3" alt=""/> 
                        </div>

                        <div class="  md:w-1/2  border-2 border-navcolour sm:82 rounded-lg  bg-sky-300 text-fuchsia-950   mx-4 ">
                            <h5 class="mx-auto mt-2 mb-4 text-1xl font-bold tracking-tight leading-none  text-fuchsia-600 md:text-2xl lg:text-2xl">
                                Domiciliary Care(Home Care) <br/><br/>
                            </h5>

                            <p class='font-normal font-semibold text-sm md:text-lg px-2'>
                            Our domiciliary care services help service users to maintain a quality of life and independence in the comfort of
                              their home.
                            The range of services we offer includes:<br/><br/>

                            <ul class="list-disc ml-6">
                             <li><Link to='/social'><u>Social Inclusion</u></Link></li>
                            <li><Link to='/personal'><u>Personal Care</u></Link></li>
                            <li><Link to='/sitting'><u>Sitting Calls</u></Link></li>
                            
                            </ul>
                            
                            
                            <br/><br/>


                            </p>

                        </div> 

                    </div>
                    
                </div>

                <p class='font-normal bg-sky-200 text-fuchsia-950 text-sm md:text-lg   sm:items-center sm:justify-center px-2'>
                    <span className='text-xl font-bold'>Why should you choose our domiciliary care services:</span> <br/><br/>
                    <ul class="list-disc ml-8">
                        <li> We are affordable, we listen and incorporate your wishes.</li>
                        <li>We provide care at home in your familiar and comfortable environment.</li>
                        <li>We support people to maintain their independence and promote choice.</li>
                        <li>We respect and promote dignity in delivery of our services.</li>
                        <li>We listen to your wishes and tailor make our services to suit your needs</li>
                    </ul><br/>
                </p>

                <div class="px-2 lg:px-4 mx-auto max-w-screen-xl text-center pt-4">

                    <div class=" mx-auto max-w-fit text-center pt-6  ">
                        <h4 class="bg-gradient-to-r from-violet-950 to-fuchsia-950 bg-clip-text text-transparent mb-4 text-1xl font-bold tracking-tight leading-none  md:text-3xl lg:text-3xl">
                            Other services we offer:
                        </h4>
                    </div> 
                        <div class="  grid  lg:grid-cols-3 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1  lg:px-2 item-stretch ">
                            <div id='palliative' class=" mt-8 pt-4 pb-4">
                                <div class="md:w-full col-span-1  pt-2">
                                    <img class="rounded-lg " src={paliat}  alt="" />
                                </div>
                                <div class="md:w-full  sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center  px-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        End-of-life Care(Palliative Care)
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='rounded-lg text-left '>
                                        
                                        We provide a range of services to those with a terminal diagnosis. VEEMU is there to provide physical, emotional,
                                        social, and spiritual support for service users and their families during defining moments of life. We offer this service from the time of diagnosis through end-of-life.
                                        <br/><br/>
                                        <span className=' font-bold'>Why you should join us:</span> <br/><br/>
                                        <ul class="list-disc ml-6">
                                            <li>We provide reassurance, comfort and companionship.</li>
                                            <li>We bring comfort to loved ones by knowing that their relative/friend is receiving good quality care. This reduces 
                                                stress and anxiety.
                                            </li>
                                            <li>Help to manage pain using prescribed medication as well as engaging in therapeutic intervention.</li>
                                        </ul>
                                        </p>

                                        
                                    </p>
                                </div>
                               
                            </div>
                       

                            <div id='respite' class="  mt-8 pt-4 pb-4">
                                <div class="md:w-full col-span-1 pt-2">
                            
                                <img class="rounded-lg" src={respite} alt="" />
                                </div>
                                <div class="md:w-full  sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center   px-2 ">
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        Respite Care
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='text-left'>
                                        We help primary caregivers and families get some relief in order to re-energise by providing
                                        temporary care services to their loved ones being looked after. This allows carers/family some time to catch up with friends
                                        and engage in other activities of their interest.<br/><br/>
                                         

                                        <span className=' font-bold'>We strive to:</span>
    <br/>
                                        <ul class="list-disc ml-6">
                                            <li>promote the mental health and wellbeing of our carers and the individual being cared for.</li>
                                            <li>prevent burnouts and provide the opportunity for a break to family members or carers.</li>
                                            <li>offer a person centred care, placing our service users at the centre of our services.</li>
                                        </ul>
                                    </p> <br/><br/>
                                    </p>
                                </div>
                            
                            </div>

                            <div id='supported' class=" mt-8 pt-4 pb-4">
                                <div class="md:w-full col-span-1  pt-2">
                                    <img class="rounded-lg" src={domic} alt="" />
                                </div>
                                <div class="md:w-full  sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center   px-2 ">
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                            <p>
                                            Supported Living Care
                                            </p>
                                    </h5>
                                    

                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='text-left'>
                                        Our Supported Living services help people to live independently and manage their own tenancies, 
                                        with support designed around their needs and goals. We aim to promote choice and personalise our 
                                        services to the needs of our service users. We support adults with mental health needs, dementia 
                                        and those recovering from hospital discharge.The services we offer include support with:<br/><br/>
                                        <ul class="list-disc ml-6">
                                            <li>Cooking, cleaning and running errands</li>
                                            <li>Promoting a healthy lifestyle</li>
                                            <li>Personal care, such as getting washed and dressed and toileting</li>  
                                            <li>Support with medication.</li>
                                            <li>Social inclusion</li>
                                            <li>Light housekeeping</li>  
                                            <li>Promoting relationships with family and friends.</li>                                    
                                        </ul>

                                        
                                    </p> 
                                    </p>
                                 </div>
                            </div>
                        </div>
                                        
                    

                </div>
            </div>
        </section>
    </div>
)
}

export default Domiciliary