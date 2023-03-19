import React, { useEffect } from 'react'
import { HiUser } from 'react-icons/hi';
import { ImKey } from 'react-icons/im';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router'

const LoginForm = () => {
    const router = useRouter()

    // Setting the default vale of the form
    const defaultInitialValue = {
        username: '',
        password: ''
    }

    // Importing the requires useForm fields
    const { register, handleSubmit, reset, formState } = useForm({ defaultValues: defaultInitialValue });

    const onSubmit = async (data) => {
        console.log("Data ", data);
        const res = await Axios.post(`${process.env.BASE_URL_DEV}/user/login`, data)
        if (res.data.success){
            router.push("/dashboard")
        }else{
            toast.error("Invalid Username and Password")
        }
    }

    // Reseting the data
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset(defaultInitialValue)
        }
    }, [formState, reset])



    return (
        <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-red-50">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <form onSubmit={handleSubmit(onSubmit)} className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-[400px] lg:w-[400px] m-auto mx-10 lg:mx-0">
                <div className='my-5'>
                    <img className='scale-75 ' src="/images/Logo1.png" alt="" />
                </div>
                <div className="w-full p-2 justify-start flex flex-col">
                    <div className=" flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 p-1" mode="render" block="">
                            <HiUser />
                        </span>
                        <input
                            type="text"
                            className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-3"
                            placeholder="Enter your username"
                            {...register("username", { required: true })}
                        />
                    </div>

                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0 p-2" mode="render" block="">
                            <ImKey />
                        </span>
                        <input
                            type="password"
                            className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-3"
                            placeholder="Enter your password"
                            autoComplete="on"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <button type='submit' className="px-4 py-2 rounded bg-red-900 text-white hover:bg-red-800 my-4 w-full">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm