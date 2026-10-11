"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
    const { data: session, refetch } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const [name, setName] = useState<string | null>(null);
    const currentName = name !== null ? name : (user?.name || "");

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await authClient.updateUser({
                name: currentName,
            }, {
                onSuccess: () => {
                    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
                    refetch();
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
                }
            });
        } catch {
            toast.error("একটি ত্রুটি ঘটেছে!");
        }
    };

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Safely sign out hoyeche.");
                    router.push("/");
                },
            },
        });
    };

    return (
        <div className="bg-[#f0f5f0] min-h-150">
            <div className="w-full max-w-5xl mx-auto py-8 space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
                    <p className="text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner">
                                {/* // eslint-disable-next-line @next/next/no-img-elementS */}
                                <img
                                    src={user?.image || "https://img.daisyui.com/images/profile/demo/superperson@192.webp"}
                                    alt={user?.name || "User Avatar"}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">{user?.name || "লোড হচ্ছে..."}</h2>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 rounded-xl hover:bg-red-50 transition font-medium text-sm"
                    >
                        ⏻ সাইন আউট
                    </button>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                    <h3 className="text-md font-bold text-gray-800 border-b pb-3">তথ্য</h3>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">নাম</label>
                            <input
                                type="text"
                                value={currentName}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={user?.name || "লোড হচ্ছে..."}
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 text-gray-800"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#05893E] hover:bg-[#046e32] text-white font-semibold rounded-xl transition shadow-sm"
                        >
                            আপডেট
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;