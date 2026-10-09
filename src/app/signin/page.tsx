import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SIgnInPage = () => {
    return (
        <div className='bg-[#f0f5f0] min-h-150'>
            <div className='flex flex-col items-center justify-center mt-10 '>
                <div className='flex flex-col justify-center items-center my-4 '>
                    <h1 className='text-2xl font-bold mb-1'>সাইন ইন</h1>
                    <p className='text-sm text-gray-500'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
                </div>
                <fieldset className="fieldset bg-[#fafcfa] border-base-300 rounded-box w-100 border p-4">



                    <label className="label font-semibold text-gray-600">ইমেইল</label>
                    <input type="email" className="input w-100" placeholder="you@example.com" />

                    <label className="label font-semibold text-gray-600">পাসওয়ার্ড</label>
                    <input type="password" className="input w-100" placeholder="কমপক্ষে ৮ অক্ষর" />



                    <button className="btn bg-[rgb(0,142,62)] mt-4 text-white w-100 shadow-sm hover:bg-green-900">সাইন ইন</button>
                    <div className="flex items-center justify-center my-4 w-full">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-xs text-gray-500 font-medium">অথবা</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <div className='flex justify-center gap-4 '>
                        <div className='flex gap-2 items-center border border-gray-300 p-2 px-5 rounded-[5px]'>
                            <FcGoogle />
                            <p>Google দিয়ে চালিয়ে যান</p>
                        </div>
                        <div className='flex gap-2 items-center border border-gray-300 p-2 px-5 rounded-[5px]'>
                            <FaGithub />
                            <p>GitHub দিয়ে চালিয়ে যান</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <p>অ্যাকাউন্ট আছে? <span className='text-green-700 font-semibold cursor-pointer'>সাইন আপ করুন</span></p>
                    </div>

                </fieldset>
                <Link href={"/"}><p className='text-gray-400 text-xs my-8'>← হোম পেজে ফিরে যান</p></Link>
            </div>
        </div>
    );

};

export default SIgnInPage;