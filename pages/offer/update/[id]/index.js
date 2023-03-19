import Link from 'next/link'
import React from 'react'
import { MdDashboard } from 'react-icons/md'
import Navbar from '../../../../components/common/Navbar'
import UpdateForm from '../../../../components/core/UpdateOfferPage/UpdateForm'
import ContainerLayout from '../../../../components/layout/ContainerLayout'
import { useRouter } from 'next/router';


const UpdatePost = ({ singleOffer }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <>Loading...</>;
  }


  console.log("Single Offer", singleOffer);

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
        <UpdateForm defaultData={singleOffer?.offer} />
      </ContainerLayout>

    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL_DEV}/offer/get/offers`)
  const offer = await res.json()

  const offerSlugData = offer?.allOffer.map((ele, i) => {
    return {
      params: {
        id: ele?._id,
      }
    }
  })
  console.log("Offer Data - ", offerSlugData);
  return {
    paths: offerSlugData,
    fallback: true
  }

}

export async function getStaticProps(context) {
  console.log("Context - ", context);
  const res = await fetch(`${process.env.BASE_URL_DEV}/offer/get/offerid/${context.params.id}`)
  const offer = await res.json()

  console.log("Offer Data -----> ", offer);

  if (!offer.success) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {
      singleOffer: offer
    },
    revalidate: 1,
  }

}

export default UpdatePost