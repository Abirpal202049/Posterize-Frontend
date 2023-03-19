import React, { useState } from 'react'
import ContainerLayout from '../../components/layout/ContainerLayout/index.js';
import { IoAdd } from 'react-icons/io5';
import Navbar from '../../components/common/Navbar.js';
import Link from 'next/link.js';
import { MdOutlineLocalOffer } from 'react-icons/md';
import OfferCard from '../../components/core/DashboardPage/OfferCard.js';



const Dashboard = ({ Offers }) => {
    // console.log("All Offer - ", Offers);

    const [openDelModal, setOpenDelModal] = useState(false)

    const openDeleteModal = () => {
        try {
            setOpenDelModal(true)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
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
                                <OfferCard data={element} openDelModal={openDelModal} setOpenDelModal={setOpenDelModal} key={i}/>
                            )
                        })}
                    </div>
                )}


            </ContainerLayout>

            {openDelModal && (
                <div onClick={()=>setOpenDelModal(false)} className='fixed backdrop-blur-sm top-0 left-0 right-0 bottom-0 flex bg-[#00000055]'></div>
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