import React from 'react';
import Link from 'next/link';

interface Market {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
    markets: Market[];
}

const ProductDetail = ({ product }: { product: Product }) => {
    if (!product) return <div className="text-center py-20">লোড হচ্ছে...</div>;

    const isUp = product.change.dir === 'up';
    const isDown = product.change.dir === 'down';

    const allMinPrices = product.markets?.map((m) => m.min) || [0];
    const allMaxPrices = product.markets?.map((m) => m.max) || [0];

    const lowestPrice = Math.min(...allMinPrices);
    const highestPrice = Math.max(...allMaxPrices);
    const averagePrice = Math.round(
        (allMinPrices.reduce((a, b) => a + b, 0) + allMaxPrices.reduce((a, b) => a + b, 0)) /
        (allMinPrices.length * 2 || 1)
    );

    return (
        <div className='bg-[#f0f5f0]'>
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-6 ">


                <nav className="text-xs text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:underline">হোম</Link>
                    <span>›</span>
                    <span>{product.categoryNameBn || product.category}</span>
                    <span>›</span>
                    <span className="text-gray-800 font-medium">{product.nameBn}</span>
                </nav>


                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl shrink-0">
                            {product.categoryIcon}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">{product.nameBn}</h1>
                            <p className="text-xs text-gray-400">প্রতি {product.unit} - {product.categoryNameBn}</p>
                            <p className="text-xs text-gray-600 mt-1">
                                গতকালের তুলনায় আজ দাম{' '}
                                <span className={isUp ? 'text-red-600 font-semibold' : isDown ? 'text-green-600 font-semibold' : 'text-gray-600'}>
                                    {isUp ? 'বেড়েছে' : isDown ? 'কমেছে' : 'পরিবর্তিত হয়নি'}
                                </span>{' '}
                                · {product.change.pct}%
                            </p>
                        </div>
                    </div>


                    <div className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3 text-center shrink-0 w-full sm:w-auto">
                        <span className="text-[10px] text-gray-400 block font-medium">আজকের দাম</span>
                        <div className="text-2xl font-extrabold text-gray-900">{product.today}</div>
                        <div className="text-[11px] text-gray-500 flex items-center justify-center gap-1 mt-0.5">
                            <span>টাকা / {product.unit}</span>
                        </div>
                        <div className={`text-xs font-semibold flex items-center justify-center gap-1 mt-1 ${isUp ? 'text-red-600' : isDown ? 'text-green-600' : 'text-gray-500'
                            }`}>
                            <span>{isUp ? '▲' : isDown ? '▼' : '—'}</span>
                            <span>{product.change.pct}%</span>
                        </div>
                    </div>
                </div>


                <div className="space-y-3">
                    <h2 className="text-sm font-bold text-gray-800">দামের সারসংক্ষেপ</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">


                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <span className="text-[11px] text-gray-400 block">সর্বনিম্ন দাম</span>
                            <div className="text-lg font-bold text-green-600 mt-1">{lowestPrice} টাকা</div>
                            <span className="text-[10px] text-gray-400 mt-0.5 block">সবচেয়ে কম দামের বাজার</span>
                        </div>


                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <span className="text-[11px] text-gray-400 block">সর্বোচ্চ দাম</span>
                            <div className="text-lg font-bold text-red-600 mt-1">{highestPrice} টাকা</div>
                            <span className="text-[10px] text-gray-400 mt-0.5 block">সবচেয়ে বেশি দামের বাজার</span>
                        </div>


                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <span className="text-[11px] text-gray-400 block">গড় দাম</span>
                            <div className="text-lg font-bold text-gray-900 mt-1">{averagePrice} টাকা</div>
                            <span className="text-[10px] text-gray-400 mt-0.5 block">প্রতি কেজি-এর হিসাব</span>
                        </div>

                    </div>
                </div>


                <div className="space-y-3">
                    <h2 className="text-sm font-bold text-gray-800">বাজারভিত্তিক আজকের দাম</h2>

                    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr className="border-b border-gray-100 text-gray-400 font-medium">
                                        <th className="p-4">বাজার</th>
                                        <th className="p-4">বিভাগ</th>
                                        <th className="p-4">সর্বনিম্ন</th>
                                        <th className="p-4">সর্বোচ্চ</th>
                                        <th className="p-4 text-right">গড়</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-gray-700">
                                    {product.markets?.map((item, index) => {
                                        const avgMarketPrice = Math.round((item.min + item.max) / 2);
                                        return (
                                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">{item.market}</td>
                                                <td className="p-4 text-gray-500">{item.division}</td>
                                                <td className="p-4 text-gray-800">{item.min} টাকা</td>
                                                <td className="p-4 text-gray-800">{item.max} টাকা</td>
                                                <td className="p-4 text-right font-semibold text-gray-900">{avgMarketPrice} টাকা</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default ProductDetail