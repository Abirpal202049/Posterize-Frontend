import React from 'react'
import Navbar from '../../../components/common/Navbar'
import CreateOffer from '../../../components/core/CreateOfferPage'
import ContainerLayout from '../../../components/layout/ContainerLayout'
import {MdDashboard} from 'react-icons/md';
import Link from 'next/link';

const CreateForm = () => {
  return (
    <div>
      <Navbar>
        <Link href="/dashboard">
          <div className='text-xl flex items-center font-medium bg-red-900 text-white px-7 py-2 rounded-full gap-1 cursor-pointer shadow-2xl hover:bg-red-800 transition-all duration-200 justify-center'>
            <MdDashboard fontSize={25} />
            Dashboard
          </div>
        </Link>
      </Navbar>
      <ContainerLayout>
        <CreateOffer />
      </ContainerLayout>
    </div>
  )
}

export default CreateForm