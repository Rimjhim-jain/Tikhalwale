import React from 'react';
import Delivery from '../../img/delivery.png';
import HeroBg from '../../img/heroBg.png';
import { heroData } from '../../utils/data';



const HomeBanner = () => {
    return (
        <div>
        <section className='grid grid-cols-1  md:grid-cols-2 gap-2 w-full id="home"'>
            <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-4'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1'>
                    <p className='text-base text-orange-500 font-semibold'>Delivery</p>
                    <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt='delivery'
                        />
                    </div>
                </div>
                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
                    The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate dignissimos aut blanditiis omnis aliquid quod ab facere iusto! Debitis.</p>
                <button
                    type='button'
                    className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '>Order Now</button>
            </div>


            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg} className='ml-auto h-370 w-full lg:h-650 lg:w-auto' alt='herobg' />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap lg:px-32'>
                    {heroData && heroData.map(n=> (
                       <div key={n.id} className='
                          
                         lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg'>
                       <img src={n.imageSrc} className='w-20 lg:w-40 
                       -mt-10 lg:-mt-20' alt='I1'/>  
                       <p className='text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor'>{n.name}</p>
                       <p className=' text-[12px] lg:text-sm text- lighttextGray font-semibold my-1lg:my-3'>{n.decp}</p>
                       <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{n.price}</p>
                     </div>  
                    ))}
                </div>
            </div>


        </section>
         </div>

    )
}

export default HomeBanner;