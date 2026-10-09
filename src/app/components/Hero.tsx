import React from 'react';
import Image from 'next/image';

const Hero = () => {

    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
        timeZone: 'Asia/Dhaka',
    });

    return (
        <section className="w-full bg-[#f4f7f4] py-8 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col-reverse md:flex-row items-center justify-between gap-8">


                <div className="flex-1 space-y-4 text-left">

                    <div className="inline-block px-3.5 py-1 bg-[#e8f5e9] text-[#2e7d32] text-xs font-semibold rounded-full">
                        {date}
                    </div>


                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                        আজকের বাজারের দাম এক নজরে
                    </h1>


                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
                        গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>


                    <div className="pt-2">
                        <button className="bg-[#05893e] hover:bg-[#046e32]  text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-xl hover:shadow transition-all cursor-pointer">
                            সব পণ্য দেখুন
                        </button>
                    </div>
                </div>


                <div className="w-full md:w-auto flex justify-center items-center">
                    <div className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-72">
                        <Image
                            src="/bazar-hero.png"
                            alt="banner image"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;