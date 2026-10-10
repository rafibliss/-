import React from 'react';

interface Product {
    id: number;
    nameBn: string;
    categoryIcon: string;
    unit: string;
    today: number;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
}

export default function ProductCard({ product }: { product: Product }) {
    const isUp = product.change.dir === 'up';
    const isDown = product.change.dir === 'down';

    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between gap-4">

            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl shrink-0 border border-gray-100">
                    {product.categoryIcon}
                </div>
                <div>
                    <h3 className="text-sm font-bold text-gray-900">{product.nameBn}</h3>
                    <p className="text-xs text-gray-400">প্রতি {product.unit}</p>
                </div>
            </div>


            <div className="flex items-end justify-between pt-2 border-t border-gray-50">
                <div>
                    <span className="text-[10px] text-gray-400 block font-medium">আজকের দাম</span>
                    <span className="text-base font-extrabold text-gray-900">{product.today} টাকা</span>
                </div>

                <div className={`text-xs font-semibold px-2 py-1 rounded-lg flex items-center gap-1 ${isUp
                    ? 'text-red-600 bg-red-50'
                    : isDown
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-500 bg-gray-50'
                    }`}>
                    <span>{isUp ? '▲' : isDown ? '▼' : '—'}</span>
                    <span>{product.change.pct}%</span>
                </div>
            </div>
        </div>
    );
}