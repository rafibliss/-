'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("সফল্ভাবে সাইন আউট হয়েছে!");
                    router.push('/signin');
                },
            },
        });
    }

    return (
        <div>
            {user ? (
                <div className="dropdown dropdown-end">


                    <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer py-1 px-2 rounded-xl hover:bg-gray-100 transition">
                        <div className="avatar">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                {/* // eslint-disable-next-line @next/next/no-img-elementS */}
                                <img
                                    src={user.image || "https://img.daisyui.com/images/profile/demo/superperson@192.webp"}
                                    alt={user.name}
                                />
                            </div>
                        </div>
                        <span className="font-semibold text-gray-800">{user.name}</span>
                        <svg className="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </div>


                    <ul tabIndex={0} className="dropdown-content z-1 menu p-3 shadow-lg bg-white rounded-2xl w-64 border border-gray-100 mt-2 space-y-1">


                        <li className="px-3 py-2 border-b border-gray-100 pointer-events-none">
                            <p className="font-bold text-gray-900 text-sm truncate">{user.name}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </li>


                        <li>
                            <Link href="/profile" className="flex items-center gap-3 py-2.5 px-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium">
                                👤 আমার প্রোফাইল
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={handleSignOut}
                                className="w-full flex items-center gap-3 py-2.5 px-3 text-red-600 hover:bg-red-50 rounded-xl font-medium text-left"
                            >
                                ⏻ সাইন আউট
                            </button>
                        </li>

                    </ul>
                </div>
            ) : (
                <div className="flex gap-2">
                    <Link href='/signin'>
                        <button className="btn bg-base-100 outline-none">সাইন ইন</button>
                    </Link>
                    <Link href='/signup'>
                        <button className="btn btn-success bg-[#05893E] text-white">সাইন আপ</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo; 