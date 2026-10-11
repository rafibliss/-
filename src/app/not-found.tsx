import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen w-full bg-[#f4f7f4] flex flex-col items-center justify-center px-4 text-center">
            {/* 404 Big Badge */}
            <div className="relative mb-4">
                <h1 className="text-8xl sm:text-9xl font-extrabold text-[#05893E]/10 tracking-widest select-none">
                    404
                </h1>
                <span className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl font-bold text-gray-800">
                    পৃষ্ঠাটি পাওয়া যায়নি!
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                আপনি যে পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
            </p>

            {/* Back Home Button */}
            <Link
                href="/"
                className="bg-[#05893E] hover:bg-[#046e32] text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
                হোম পেজে ফিরে যান
            </Link>
        </div>
    );
};

export default NotFoundPage;