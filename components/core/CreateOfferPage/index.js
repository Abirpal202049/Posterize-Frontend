import React, { useState, useEffect } from 'react'
import { FaRupeeSign, FaPercent } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useRouter } from 'next/router'

const CreateOffer = () => {
    const router = useRouter()
    const [noOfCustomer, setNoOfCustomer] = useState('Unlimited')
    const [offerPerCustomer, setOfferPerCustomer] = useState('Unlimited')


    const { register, handleSubmit, reset, watch } = useForm();
    const watchofferType = watch("offerType", "Flat_Discount")


    console.log(watchofferType);


    const onSubmit = async (data) => {
        data.noOfCustomer = noOfCustomer
        data.offerPerCustomer = offerPerCustomer

        if(data.offerType !== 'Percentage_Discount'){
            data.discount = null
            data.maxDiscount = null
        }

        if(noOfCustomer === "Unlimited"){
            data.totalCustomer = null
        }
        if(offerPerCustomer === "Unlimited"){
            data.usagePerCustomer = null
        }
        console.log("Offer Data ", data);

        const res = await Axios.post(`${process.env.BASE_URL_DEV}/offer/create`, data)
        console.log(res.data);
        if (res.data.success) {
            reset()
            router.push(`/dashboard`)
            toast.success("Offer Created Successfully")
        } else {
            toast.error("Something went wrong")
        }
    }


    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />


            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">offer code</div>
                        <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                            <input
                                placeholder="ANJ200FF"
                                className="p-1 px-2 appearance-none outline-none w-full text-red-800"
                                maxLength={8}
                                {...register("offerCode", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">offer title</div>
                        <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                            <input
                                placeholder="offer-in-salon-and-spa"
                                className="p-1 px-2 appearance-none outline-none w-full text-red-800"
                                maxLength={60}
                                {...register("offerTitle", { required: true })}
                            />
                        </div>
                    </div>
                </div>


                <div>
                    <div className="font-bold text-red-900 text-xs leading-8 uppercase h-6 mx-2 mt-3">offer description</div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full flex-1 mx-2 ">
                            <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                                <textarea
                                    placeholder="Enter a offer description"
                                    className="p-1 px-2 appearance-none outline-none w-full text-red-800"
                                    maxLength={140}
                                    {...register("offerDescription", { required: true })}
                                />
                            </div>
                        </div>

                    </div>
                </div>


                <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">offer type</div>
                        <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                            <select name="" id="" className="p-1 px-2  outline-none w-full text-red-800" {...register("offerType")} >
                                <option value="Flat_Discount">Flat Discount</option>
                                <option value="Percentage_Discount">Percentage Discount</option>
                                <option value="Free_Gift">Free Gift</option>
                            </select>
                        </div>
                    </div>

                    {watchofferType === "Percentage_Discount" && (
                        <div className="w-full mx-2 flex-1 ">
                            <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">discount percentage (%)</div>
                            <div className="bg-white my-2 flex border border-slate-200 rounded items-center">
                                <input type="number" placeholder="Enter the minimum order value" className="px-2 py-1 appearance-none outline-none w-full text-red-800" maxLength={60} {...register("discount")} />
                                <div className="bg-slate-200 p-1 px-2 py-2 text-red-900">
                                    <FaPercent fontSize={20} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">applicable on</div>
                        <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                            <select name="" id="" className="p-1 px-2  outline-none w-full text-red-800" {...register("applicableOn")}>
                                <option value="All_Order">All orders</option>
                                <option value="Order_above_amount">Orders above certain amount</option>
                                <option value="Select_service">Services</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Minimum order value</div>
                        <div className="bg-white my-2 flex border border-slate-200 rounded items-center">
                            <div className="bg-slate-200 p-1 px-2 py-2 text-red-900">
                                <FaRupeeSign fontSize={20} />
                            </div>
                            <input type="number" placeholder="Enter the minimum order value" className="px-2 py-1 appearance-none outline-none w-full text-red-800" {...register("minOrderValue")} />
                        </div>
                    </div>

                    {watchofferType === "Percentage_Discount" && (
                        <div className="w-full mx-2 flex-1 ">
                            <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Maximum discount </div>
                            <div className="bg-white my-2 flex border border-slate-200 rounded items-center">
                                <div className="bg-slate-200 p-1 px-2 py-2 text-red-900">
                                    <FaRupeeSign fontSize={20} />
                                </div>
                                <input type="number" placeholder="Enter the maximum discount" className="px-2 py-1 appearance-none outline-none w-full text-red-800" {...register("maxDiscount")} />
                            </div>
                        </div>
                    )}
                </div>


                <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Start date</div>
                        <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                            <input {...register("startData")} type="date" placeholder="ANJ200FF" className="p-1 px-2 appearance-none outline-none w-full text-red-800" />
                        </div>
                    </div>
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">expiration date</div>
                        <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                            <input {...register("expirationDate")} type="date" placeholder="offer-in-salon-and-spa" className="p-1 px-2 appearance-none outline-none w-full text-red-800" />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Number of customers</div>
                        {/* <ToggleInputComponent /> */}
                        <div className="bg-white my-2 flex border border-slate-200 rounded text-center">
                            <div onClick={() => setNoOfCustomer('Limited')} className={`w-[50%] ${noOfCustomer === 'Limited' ? 'bg-slate-300 rounded-l' : ''}  p-2  px-3 cursor-pointer`}>
                                Limited
                            </div>
                            <div onClick={() => setNoOfCustomer('Unlimited')} className={`w-[50%] ${noOfCustomer === 'Unlimited' ? 'bg-slate-300 rounded-r' : ''} p-2 px-3 cursor-pointer`}>
                                Unlimited
                            </div>
                        </div>
                    </div>

                    {noOfCustomer === "Limited" && (
                        <div className="w-full mx-2 flex-1 ">
                            <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Total customers</div>
                            <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                                <input type="number" placeholder="Enter the total customers" className="p-1 px-2 appearance-none outline-none w-full text-red-800" {...register("totalCustomer")} />
                            </div>
                        </div>
                    )}
                </div>


                <div className="flex flex-col md:flex-row">
                    <div className="w-full mx-2 flex-1 ">
                        <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Offer use per customer</div>

                        {/* <ToggleInputComponent /> */}
                        <div className="bg-white my-2 flex border border-slate-200 rounded text-center">
                            <div onClick={() => setOfferPerCustomer('Limited')} className={`w-[50%] ${offerPerCustomer === 'Limited' ? 'bg-slate-300 rounded-l' : ''}  p-2  px-3 cursor-pointer`}>
                                Limited
                            </div>
                            <div onClick={() => setOfferPerCustomer('Unlimited')} className={`w-[50%] ${offerPerCustomer === 'Unlimited' ? 'bg-slate-300 rounded-r' : ''} p-2 px-3 cursor-pointer`}>
                                Unlimited
                            </div>
                        </div>

                    </div>

                    {offerPerCustomer === "Limited" && (
                        <div className="w-full mx-2 flex-1 ">
                            <div className="font-bold h-6 mt-3 text-red-900 text-xs leading-8 uppercase">Usage per customer</div>
                            <div className="bg-white my-2 p-1 flex border border-slate-200 rounded">
                                <input type="number" placeholder="Enter the usage per customer" className="p-1 px-2 appearance-none outline-none w-full text-red-800" {...register("usagePerCustomer")} />
                            </div>
                        </div>
                    )}
                </div>


                <div className="mt-5 flex items-center justify-center">
                    <button className="text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-14 py-2 rounded font-semibold cursor-pointer hover:bg-red-00  bg-red-900 text-red-100 border duration-200 ease-in-out border-red-900 transition" type='submit'>Create Offer</button>
                </div>




            </form>
        </div>
    )
}

export default CreateOffer