import React from 'react'
import formatDate from '../../../utils/FormatDate'

const BaseLayout = ({ offerDetails }) => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            {/* scale-[0.5] sm:scale-[0.5] md:scale-[0.8] lg:scale-100 */}
            <div className={`bg-[url('/images/SmallScrren.jpg')] sm:bg-[url('/images/Base.png')] bg-cover sm:h-[300px] sm:w-[100vw] md:h-[400px] md:w-[800px] lg:h-[630px] lg:w-[1200px]  border-black bg-no-repeat flex flex-row mx-5 xl:mx-0 shadow-2xl`}>
                <div className={`h-full sm:w-[50%] lg:w-[45%] bg-transparent`}></div>

                <div className="bg-[#E1715D77] sm:w-[50%] lg:w-[55%] sm:bg-transparent py-10 flex flex-col justify-center items-center px-10 text-center sm:scale-[0.8] md:scale-100 gap-3 md:gap-5 lg:gap-10">

                    <div className='bg-[#E1715D] text-xl lg:text-2xl tracking-wider uppercase font-bold font-sans text-white h-fit py-1 lg:py-2 px-20 rounded-[2.5rem] w-fit shadow-2xl relative'>
                        {/* <div className="absolute bg-black scale-75 w-full h-full z-[-1] bottom-[-50%] left-[5%] rounded-full"></div> */}
                        {offerDetails?.offerCode}
                    </div>


                    <div className='font-bold font-sans text-center tracking-wide text-2xl lg:text-4xl -mt-2 lg:-mt-5'>
                        GET <span className='text-[#E1715D] text-4xl lg:text-8xl'>{offerDetails?.offerType === 'Percentage_Discount'? offerDetails?.discount : offerDetails?.offerType === 'Flat_Discount' ? 'FLAT' : 'FREE'}</span><span>{offerDetails?.offerType === 'Percentage_Discount'? '% OFF' : offerDetails?.offerType === 'Flat_Discount' ? ' DISCOUNT' : ' GIFT'}</span>
                    </div>


                    <div className=' font-thin text-center tracking-wide text-xl w-[90%] lg:text-2xl lg:w-[80%]'>
                        {offerDetails?.offerDescription}
                    </div>


                    <div className=' font-normal text-center tracking-wide text-xl lg:text-2xl -mt-3 sm:-mt-5 lg:-mt-9 lowercase'>
                        {offerDetails?.applicableOn.split('_').join(' ')}
                    </div>


                    <div className='font-bold sm:font-thin text-center tracking-wide text-white sm:text-[#E1715D] text-xl lg:text-2xl sm:-mt-2 lg:-mt-5'>
                        Valid till <span> {formatDate(offerDetails?.expirationDate)}</span>
                    </div>


                    <div className='font-bold sm:font-thin text-center tracking-wide text-white sm:text-[#E1715D] text-md lg:text-xl'>
                        Anjali Beauty Salon
                        <br />
                        23, Sector 3, Rajiv Nagar, Raigad
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BaseLayout