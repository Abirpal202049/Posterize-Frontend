import React from 'react'
import ContainerLayout from '../layout/ContainerLayout'
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';

const Navbar = ({ children }) => {
    return (
        <div className="bg-red-100">
            <ContainerLayout>
                <div className="h-10 flex justify-between items-center">
                    <Link href="/dashboard">
                        <div>
                            <img src="/images/Logo1.png" alt="" className="h-12" />
                        </div>
                    </Link>
                    <div className='flex items-center gap-3'>
                        {children}
                        <Link href="/login">
                            <div className='text-red-900 hover:text-red-800 transition-all duration-200'>
                                <BiLogOut fontSize={40} />
                            </div>
                        </Link>
                    </div>

                </div>
            </ContainerLayout>
        </div>
    )
}

export default Navbar