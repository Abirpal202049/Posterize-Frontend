import Link from 'next/link'
import React from 'react'
import { RxUpdate } from 'react-icons/rx';
import { AiFillDelete } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import formatDate from '../../../utils/FormatDate';

const OfferCard = ({ data, setOpenDelModal, setDeleteid }) => {
    
    const openModal = (id) => {
        setOpenDelModal(true)
        setDeleteid(id)
        console.log("Card", id);
    }
    

    return (
        <>
            <div className='border-2 border-[#FEE2E2] w-full p-5 px-8 rounded-lg flex justify-between gap-5 flex-col bg-[#FDF5EF] hover:border-[#7F2022] relative group transition-all duration-200'>
                <div className="absolute right-[-0.7rem] top-[-0.7rem] rounded-full bg-[#7F2022] hover:bg-[#9C3D38] text-[#FEE2E2] p-2 justify-center items-center  hidden group-hover:block transition-all duration-200">
                    <Link href={`/offer/${data.offerTitle}`} target="_blank">
                        <FiExternalLink />
                    </Link>
                </div>


                {/* Offer Type */}
                <div className='leading-4'>
                    <div className='font-semibold uppercase bg-[#7F2022] text-white p-1 px-5 w-fit rounded-full'>
                        {data.offerCode}
                    </div>
                    <div className='text-[11px] mt-1'>
                        {data.offerTitle}
                    </div>
                </div>

                {/* Offer code */}
                <div className='leading-5 text-[15px]'>
                    <div className=''>
                        <span className="capitalize font-bold">Offer Type : </span> {data?.offerType}
                    </div>
                    <div className=''>
                        <span className="capitalize font-bold">Applicable On : </span> {data?.applicableOn}
                    </div>
                </div>


                <div className='leading-5 text-[13px]'>
                    <div className=''>
                        <span className="capitalize font-bold">Starting Date : </span> {formatDate(data?.startData)}
                    </div>
                    <div className=''>
                        <span className="capitalize font-bold">Expire Date : </span> {formatDate(data?.expirationDate)}
                    </div>
                </div>

                <div className='flex justify-between flex-wrap '>
                    <div className=' bg-[#9c3d38dd] px-4 text-white rounded py-1 cursor-pointer shadow-lg group-hover:bg-[#9c3d38] transition-all duration-200'>
                        <Link href={`/offer/update/${data?._id}`} className="flex items-center gap-2">
                            <RxUpdate />
                            Update
                        </Link>
                    </div>
                    <div onClick={() => openModal(data?._id)} className='flex items-center gap-2 bg-[#B3B3CC] px-4 text-white rounded py-1 cursor-pointer shadow-lg group-hover:bg-[#9699BF] transition-all duration-200'>
                        <AiFillDelete />
                        Delete
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferCard