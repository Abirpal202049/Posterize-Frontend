import { useRouter } from 'next/router';
import React from 'react'
import BaseLayout from '../../../components/layout/BaseLayout.js'

const SingleOffer = ({ singleOffer }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <>Loading...</>;
    }

    return (
        <div>
            <BaseLayout offerDetails={singleOffer?.offer}/>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL_DEV}/offer/get/offers`)
    const offer = await res.json()

    const offerSlugData = offer?.allOffer.map((ele, i) => {
        return {
            params: {
                slug: ele?.offerTitle
            }
        }
    })

    return {
        paths: offerSlugData,
        fallback: true
    }

}

export async function getStaticProps(context) {

    const res = await fetch(`${process.env.BASE_URL_DEV}/offer/get/offer/${context.params.slug}`)
    const offer = await res.json()

    if (!offer.success) {
        return {
            redirect: {
                destination: '/',
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


export default SingleOffer