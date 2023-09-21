import React from 'react'
import personal from '../images/smiley-woman-getting-ready-haircut-home-with-hairdresser.jpg'
import {Link} from 'react-router-dom'
function Personal() {
  return (
    <div>
         <section>
        <section class=" bg-cover bg-center bg-no-repeat bg-personal bg-gray-200  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-24 lg:py-40">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">
                Personal Care</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-8 pb-4">
                                <div class="md:w-1/2 col-span-1 px-2 ">
                                    <img class="rounded-lg md:h-92" src={personal}  alt="" />
                                </div>
                                <div class="md:w-1/2  sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center  mx-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        Personal Care
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='rounded-lg text-left '>
                                        
                                    
                                        <ul class="list-disc ml-6">
                                            <li>Help with getting up.</li>
                                            <li>Help with going to bed.</li>
                                            <li>Assistance with incontinence.</li>
                                            <li>Assistance with medication.</li>
                                            <li>Meal preparation, preparing hot /cold drinks and helping you to meet any dietary, religious or cultural requirements.</li>
                                            
                                        </ul>
                                        </p>

                                        
                                    </p>
                                </div>
                               
                            </div>
        </section>
        
        <div class="  grid  lg:grid-cols-3 lg:gap-x-3 m-auto md:grid-cols-2 md:gap-x-2 grid-col-1 px-2 lg:px-5 item-stretch ">
                            <div id='palliative' class=" mt-8 pt-4 pb-4">
                                
                                <div class="md:w-3/4 pt-8 pb-8 sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center  px-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        <Link to='/social'><u>Social Inclusion</u></Link>
                                        </p>
                                    </h5>
                                    
                                </div>
                               
                            </div>
                       

                            <div id='respite' class="  mt-8 pt-4 pb-4">
                                
                                <div class="md:w-3/4 pt-8 pb-8 sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center   px-2 ">
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        <Link to='/sitting'><u>Sitting Calls</u></Link>
                                        </p>
                                    </h5>
                                    
                                </div>
                            
                            </div>

                            <div id='supported' class=" mt-8 pt-4 pb-4">
                            
                                <div class="md:w-3/4 pt-8 pb-8 sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center   px-2 ">
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                            <p>
                                            <Link to='/services'><u>Other Services</u></Link>
                                            </p>
                                    </h5>
                                    
                                 </div>
                            </div>
                        </div>

        </section>

        


        </section>
    </div>
  )
}

export default Personal