import React from 'react'
import inclusion from '../images/seniors-playing-cards-cafe.jpg'

function Social() {
  return (
    <div>
        <section>
        <section class=" bg-cover bg-center bg-no-repeat  bg-gray-200  bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl  bg- py-16 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold  tracking-tight leading-none text-yellowtheme md:text-5xl lg:text-6xl">
                Social Inclusion:</h1>
                
            </div>


            <section>
        <div id='palliative' class="md:flex pt-8 ">
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
        
        
        </section>

        
        


        </section>
    </div>
  )
}

export default Social