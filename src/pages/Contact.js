import React from 'react'
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaLocationDot, FaMobileScreenButton, FaPhone,  } from 'react-icons/fa6';

//import  Map from '../components/Map'

function Contact() {

  /* const location={
    address: '40 Capmartin Road, Coventry CV6 3FY, UK',
    lat: 52.4279443,
    lng: -1.5136305, */
//}
  return (
    <div>
        <section>
            <div class=" lg:px-4 mx-auto max-w-screen-xl t pt-4">

                <div class="lg:px-4 mx-auto max-w-screen-xl text-center pt-6  ">
                    <h4 class="mb-4 text-1xl font-extrabold tracking-tight leading-none text-emerald-800 md:text-3xl lg:text-3xl">
                    Contacting Continued HealthCare
                    </h4>
                </div> 

                <div class="sm:flex sm:items-center sm:justify-center lg:mx-8 mt-2 px-5">
                  <p class=" font-normal text-sm md:text-lg">
                      To request more information, please give us a call or email us. We would love to speak to you regarding
                      our experienced support carers that can help you deliver excellent services to your business and clients.
                  
                  </p>
                  <br/>
            
                </div>

                <center>
                <div class="max-w-fit sm:82 rounded-lg  items-center sm:items-center sm:justify-center mx-4  lg:mx-8 mt-1">

                    <div class="max-w-fit  sm:82 rounded-lg   sm:items-center sm:justify-center py-4 lg:ml-48 mt-8">

                        <IconContext.Provider value={{ color: '#ff0000', size: '50px', padding:'5px 2px' }}>
                            <a href="mailto:continuedhealthcare@consultant.com"><div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                            
                            <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center  mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black text-2xl font-bold"><a href="mailto:continuedhealthcare@consultant.com" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                            continuedhealthcare@consultant.com
                            </p>
                          </div>
                    </div>

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:0795 419 2764"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black  "><a href="tel:0795 419 2764" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mobile: 0795 419 2764</a></span></div>
                            
                            </p>
                          </div>

                          

                    </div>

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:07463 372 8971"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          

                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="tel:07463 372 8971" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                            Mobile: 07463 372 8971
                            </p>
                          </div>

                    </div>

                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#339933', size: '50px', padding:'5px 2px' }}>
                            <a href="tel:02477981121"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaPhone class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                            <div><span class="text-black "><a href="tel:02477981121" 
                            className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700
                             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Landline:  0247 798 1121</a></span></div>
                          
                            </p>
                          </div>

                    </div>


                    <div class="max-w-fit  sm:82 rounded-lg  sm:items-center sm:justify-center py-4  lg:ml-48 mt-8">

                          <IconContext.Provider value={{ color: '#89cff0', size: '50px', padding:'5px 2px' }}>
                            <a href="https://www.google.com/maps/place/40+Capmartin+Rd,+Coventry+CV6+3FY,+UK/@52.4279819,-1.5136573,18z"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                              <FaLocationDot class="sm:items-center sm:justify-center  my-6"/>
                            </div></a>
                          </IconContext.Provider>
                          <div class="  sm:items-center sm:justify-center   mt-1">
                            <p class=" text-1xl font-normal">
                              <div>
                                <span class="text-black text-2xl font-bold">
                                  <a href="https://www.google.com/maps/place/40+Capmartin+Rd,+Coventry+CV6+3FY,+UK/@52.4279819,-1.5136573,18z" 
                                      className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Visit Us</a></span></div>
                                      Continued HealthCare Limited<br/>40 Capmartin Road<br/>
                                      Coventry<br/>CV6 3FY
                            </p>
                          </div>

                    </div>
                </div>

                </center>

        
         
         <div>

         {/* <MapSection location={location} zoomLevel={17} /> */}
         </div>
            
          

            </div>
        </section>
    </div>
  )
}

export default Contact