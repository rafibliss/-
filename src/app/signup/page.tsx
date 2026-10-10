"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string }

    const { data, error } = await authClient.signUp.email({
        ...user,
        callbackURL: '/'
    })
    if (data) {
        toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে!", {
            autoClose: 4000,
        })
        redirect("/")

    }
    if (error) {
        toast.error("En error occoured!")
    }
}

const SignUpPage = () => {
    return (
        <div className='bg-[#f0f5f0] min-h-150'>
            <div className='flex flex-col items-center justify-center mt-10 '>
                <div className='flex flex-col justify-center items-center my-4 '>
                    <h1 className='text-2xl font-bold mb-1'>অ্যাকাউন্ট তৈরি করুন</h1>
                    <p className='text-sm text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>
                <form onSubmit={onSubmit}>
                    <fieldset className="fieldset bg-[#fafcfa] border-base-300 rounded-box w-md border p-4">

                        <label className="label font-semibold text-gray-600">নাম</label>
                        <input name='name' type="text" className="input w-md" placeholder="যেমন: রহিম উদ্দিন" />

                        <label className="label font-semibold text-gray-600">ইমেইল</label>
                        <input name='email' type="email" className="input w-md" placeholder="you@example.com" />

                        <label className="label font-semibold text-gray-600">পাসওয়ার্ড</label>
                        <input name='password' type="password" className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

                        <label className="label font-semibold text-gray-600">পাসওয়ার্ড নিশ্চিত করুন</label>
                        <input name='password' type="password" className="input w-md" placeholder="আবার লিখুন" />

                        <button type='submit' className="btn bg-[rgb(0,142,62)] mt-4 text-white w-md shadow-sm hover:bg-green-900">অ্যাকাউন্ট তৈরি করুন</button>
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
                            <p>অ্যাকাউন্ট আছে? <Link href={"/signin"}><span className='text-green-700 font-semibold cursor-pointer'>সাইন ইন করুন</span></Link></p>
                        </div>

                    </fieldset>
                </form>
                <Link href={"/"}><p className='text-gray-400 text-xs my-8'>← হোম পেজে ফিরে যান</p></Link>
            </div>
        </div>
    );
};

export default SignUpPage;