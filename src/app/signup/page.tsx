"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';



const SignUpPage = () => {
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
        else if (error) {
            toast.error("En error occoured!")
        }

    }
    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        })
    }

    const handleGithubSignin = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        })
    }
    return (
        <div className='bg-[#f0f5f0] min-h-screen py-8 px-4 flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center items-center my-4 text-center'>
                <h1 className='text-2xl font-bold mb-1 text-gray-900'>অ্যাকাউন্ট তৈরি করুন</h1>
                <p className='text-sm text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>

            <form onSubmit={onSubmit} className="w-full max-w-md">
                <fieldset className="fieldset bg-[#fafcfa] border-base-300 rounded-box w-full border p-4 sm:p-6 shadow-sm">

                    <label className="label font-semibold text-gray-600">নাম</label>
                    <input
                        name='name'
                        type="text"
                        className="input w-full"
                        placeholder="যেমন: রহিম উদ্দিন"
                        required
                    />

                    <label className="label font-semibold text-gray-600">ইমেইল</label>
                    <input
                        name='email'
                        type="email"
                        className="input w-full"
                        placeholder="you@example.com"
                        required
                    />

                    <label className="label font-semibold text-gray-600">পাসওয়ার্ড</label>
                    <input
                        name='password'
                        type="password"
                        className="input w-full"
                        placeholder="কমপক্ষে ৮ অক্ষর"
                        required
                    />

                    <label className="label font-semibold text-gray-600">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input
                        name='confirmPassword'
                        type="password"
                        className="input w-full"
                        placeholder="আবার লিখুন"
                        required
                    />

                    <button type="submit" className="btn btn-primary bg-[#05893E] hover:bg-[#046e32] border-none text-white w-full mt-4">
                        সাইন আপ করুন
                    </button>

                    <div className="flex items-center justify-center my-4 w-full">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-xs text-gray-500 font-medium">অথবা</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center gap-3 w-full'>
                        <button type='button' onClick={handleGoogleSignin} className="w-full sm:w-auto flex-1">
                            <div className='flex gap-2 items-center justify-center border border-gray-300 p-2.5 rounded-[5px] hover:bg-gray-50 transition'>
                                <FcGoogle />
                                <p className="text-sm font-medium">Google দিয়ে চালিয়ে যান</p>
                            </div>
                        </button>

                        <button type='button' onClick={handleGithubSignin} className="w-full sm:w-auto flex-1">
                            <div className='flex gap-2 items-center justify-center border border-gray-300 p-2.5 rounded-[5px] hover:bg-gray-50 transition'>
                                <FaGithub />
                                <p className="text-sm font-medium">GitHub দিয়ে চালিয়ে যান</p>
                            </div>
                        </button>
                    </div>

                    <div className='flex justify-center mt-4 text-sm'>
                        <p>অ্যাকাউন্ট আছে? <Link href="/signin"><span className='text-green-700 font-semibold cursor-pointer hover:underline'>সাইন ইন করুন</span></Link></p>
                    </div>

                </fieldset>
            </form>
            <Link href={"/"}><p className='text-gray-400 text-xs my-8'>← হোম পেজে ফিরে যান</p></Link>
        </div>
    );
};

export default SignUpPage;