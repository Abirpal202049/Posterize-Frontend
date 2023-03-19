import React from 'react'
import formatDate from '../../../utils/FormatDate'

const BaseLayout = ({ offerDetails }) => {
    return (
        <div className={`bg-[url('/images/Base.png')] w-[100vw] h-[100vh] bg-no-repeat lg:bg-cover flex`}>
            <div className="absolute top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] py-5">
                {/* Offer Code */}
                <div className='bg-[#E1715D] uppercase text-8xl font-bold font-sans text-white h-fit py-2 px-40 rounded-[2.5rem] w-fit shadow-2xl relative'>
                    <div className="absolute bg-[#e3d0ca33] scale-75 w-full h-full z-[-1] bottom-[-50%] left-[5%] rounded-full"></div>
                    {offerDetails?.offerCode}
                </div>


                {/* Discount */}
                <div className='text-6xl font-bold font-sans text-center tracking-wide mt-10'>
                    GET <span className='text-9xl text-[#E1715D]'>20</span><span>% OFF</span>
                </div>


                {/* Discount */}
                <div className='text-7xl font-thin text-center tracking-wide mt-10 '>
                    {offerDetails?.offerDescription}
                </div>


                {/* Service */}
                <div className='text-7xl font-thin text-center tracking-wide mt-5'>
                    {offerDetails?.applicableOn}
                </div>


                {/* Expiry Date */}
                <div className='text-5xl font-thin text-center tracking-wide mt-10 text-[#E1715D]'>
                    Valid till <span> {formatDate(offerDetails?.expirationDate)}</span>
                </div>


                {/* Expiry Date */}
                <div className='text-4xl font-thin text-center tracking-wide mt-20 text-[#E1715D] leading-[52px]'>
                    Anjali Beauty Salon
                    <br />
                    23, Sector 3, Rajiv Nagar, Raigad
                </div>
            </div>
        </div>
    )
}

export default BaseLayout