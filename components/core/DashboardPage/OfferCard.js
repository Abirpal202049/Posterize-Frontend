import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxUpdate, RxCross2 } from 'react-icons/rx';
import { AiFillDelete } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import formatDate from '../../../utils/FormatDate';

const OfferCard = ({ data, setOpenDelModal, openDelModal }) => {
    const [deleteid, setDeleteid] = useState("")
    let imid = ""
    
    const openModal = (id) => {
        setOpenDelModal(true)
        console.log(id);
        setDeleteid(id)
        imid = id
        console.log("Delete Id", deleteid);
    }

    const deleteNow = async()=>{
        console.log("Delete Id", deleteid);
    }
    useEffect(() => {
      console.log(deleteid);
    }, [deleteid])
    

    return (
        <>

            <div className='border-2 border-[#FEE2E2] w-full p-5 px-8 rounded-lg flex gap-5 flex-col bg-[#FDF5EF] hover:border-[#7F2022] relative group transition-all duration-200'>
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

            {openDelModal && (
                <div className='fixed border bg-white w-[90vw] sm:w-fit left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded z-50 '>
                    <div className="text-center p-5 flex flex-col justify-center items-center ">
                        <div className='border-2 rounded-full border-red-900 p-2 w-fit text-red-900'>
                            <RxCross2 fontSize={50} />
                        </div>
                        <h2 className="text-xl font-sans font-bold py-4 ">Are you sure?</h2>
                        <p className="text-sm text-gray-500 px-8">Do you really want to delete this record?
                            <br />
                            This process cannot be undone</p>
                    </div>
                    

                    <div className="p-3  my-2 mb-5 text-center space-x-4 md:block">
                        <button onClick={()=>setOpenDelModal(false)} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded hover:shadow-lg hover:bg-gray-100">
                            Cancel
                        </button>
                        <button onClick={() => deleteNow()} className="mb-2 md:mb-0 bg-red-800 border border-red-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-red-900">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default OfferCard