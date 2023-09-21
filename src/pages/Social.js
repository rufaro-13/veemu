import React from 'react'
import inclusion from '../images/seniors-playing-cards-cafe.jpg'
import {Link} from 'react-router-dom'
function Social() {
  return (
    <div>
        <section>
        <section class=" bg-cover bg-center bg-no-repeat bg-social bg-gray-200  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-24 lg:py-40">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">
                Social Inclusion:</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-8 pb-4">
                                <div class="md:w-1/2 col-span-1 px-2 ">
                                    <img class="rounded-lg md:h-92" src={inclusion}  alt="" />
                                </div>
                                <div class="md:w-1/2  sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center  mx-2 ">      
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        Social Inclusion
                                        </p>
                                    </h5>
                                    <p className="font-normal text-sm md:text-lg  dark:text-gray-400 pt-4">
                                        <p className='rounded-lg text-left '>
                                        
                                    
                                        <ul class="list-disc ml-6">
                                            <li>Providing companionship inside the home or out in the community.</li>
                                            <li>Helping our service users to access activities and social events in their neighbourhood.</li>
                                            <li>Support with appointments – including hospital, GP, hair appointments.</li>
                                            <li>Social outings including holidays and other leisure activities.</li>
                                            
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
                                        <Link to='/sitting'><u>Sitting Calls</u></Link>
                                        </p>
                                    </h5>
                                    
                                </div>
                               
                            </div>
                       

                            <div id='respite' class="  mt-8 pt-4 pb-4">
                                
                                <div class="md:w-3/4 pt-8 pb-8 sm:82 rounded-lg  border-2 border-navcolour bg-sky-200 text-fuchsia-950 sm:items-center sm:justify-center   px-2 ">
                                    <h5 className="md:text-2xl text-lg font-bold tracking-tight text-fuchsia-600 dark:text-white pt-2">
                                        <p>
                                        <Link to='/personal'><u>Personal Care</u></Link>
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

export default Social