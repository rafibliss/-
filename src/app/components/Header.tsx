

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
})

const Header = () => {

    return (
        <header>
            <div className='border-b border-gray-200 bg-base-100'>
                <div className='max-w-7xl w-full mx-auto py-3 '>
                    <div className='flex justify-between'>
                        <Link href={"/"}>
                            <div className='flex
            gap-1 items-center'>
                                <Image src="/logo-icon.png" width={40} height={40} alt='logo icon' className='bg-[#05893E]  p-2 rounded-[7px]'>
                                </Image>

                                <div>
                                    <h1 className='font-bold text-2xl'>বাজার দর</h1>
                                    <p className='text-[10px] font-semibold'>{date}</p>
                                </div>
                            </div>
                        </Link>
                        <div className='flex gap-2'>
                            <Link href={'/signin'}>
                                <button className="btn bg-base-100 outline-none">সাইন ইন</button>
                            </Link>
                            <Link href={'/signup'}>
                                <button className="btn btn-success bg-[#05893E] text-white">সাইন আপ</button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;