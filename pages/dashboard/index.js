import React, { useState } from 'react'
import ContainerLayout from '../../components/layout/ContainerLayout/index.js';
import { IoAdd } from 'react-icons/io5';
import Navbar from '../../components/common/Navbar.js';
import Link from 'next/link.js';
import { MdOutlineLocalOffer } from 'react-icons/md';
import OfferCard from '../../components/core/DashboardPage/OfferCard.js';
import { RxCross2 } from 'react-icons/rx';
import Axios from 'axios'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';


const Dashboard = ({ Offers }) => {
    const router = useRouter()


    const [openDelModal, setOpenDelModal] = useState(false)
    const [deleteid, setDeleteid] = useState("")


    const deleteNow = async () => {
        console.log("Delete Id", deleteid);
        const res = await Axios.delete(`${process.env.BASE_URL_DEV}/offer/delete/${deleteid}`)
        console.log(res);
        if(res.data.success){
            setOpenDelModal(false)
            router.push(`/dashboard`)
            toast.success("Offer Deleted Successfully")
        }
        else{
            setOpenDelModal(false)
            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            {/* Navbar */}
            <Navbar>
                <Link href="/offer/create">
                    <div className='text-xl hidden sm:flex items-center font-medium bg-red-900 text-white px-7 py-2 rounded-full gap-1 cursor-pointer shadow-2xl hover:bg-red-800 transition-all duration-200'>
                        <IoAdd fontSize={25} />
                        Create Offer
                    </div>
                    <div className='text-xl flex sm:hidden items-center font-medium text-red-900 rounded-full border-2 border-red-900'>
                        <IoAdd fontSize={25} />
                    </div>
                    
                </Link>
            </Navbar>


            <ContainerLayout>
                {Offers?.allOffer.length <= 0 ? (
                    <div className="w-full flex flex-col items-center gap-2 justify-center my-10 py-10">
                        <div className="text-slate-200 flex border-4 w-fit rounded-full p-10">
                            <MdOutlineLocalOffer fontSize={100} />
                        </div>
                        <div className='text-slate-400 text-2xl font-sans'>
                            No Offers Found!
                        </div>
                        <div className='text-slate-300 text-lg font-sans -mt-2'>
                            Click on the <span><Link href="/offer/create"> 'Create Offers' </Link></span> button to get started
                        </div>
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {Offers?.allOffer.map((element, i) => {
                            return (
                                <OfferCard setDeleteid={setDeleteid} data={element} openDelModal={openDelModal} setOpenDelModal={setOpenDelModal} key={i}/>
                            )
                        })}
                    </div>
                )}


            </ContainerLayout>

            {openDelModal && (
                <div onClick={()=>setOpenDelModal(false)} className='fixed backdrop-blur-sm top-0 left-0 right-0 bottom-0 flex bg-[#00000055]'></div>
            )}

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

export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL_DEV}/offer/get/offers`)
    const allOffer = await res.json()


    return {
        props: {
            Offers: allOffer
        },
        revalidate: 1
    }
}

export default Dashboard