import React from 'react';
import MarqueeText from 'react-marquee-text';

interface Product {
    id: number;
    nameBn: string;
    image: string;
    unit: string;
    today: number;
    change: {
        dir: 'up' | 'down';
        pct: number;
    };
}

const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
        cache: "force-cache"
    })
    const data: Product[] = await res.json();
    console.log(data)
    return (
        <div>
            <MarqueeText pauseOnHover direction='right' duration={10}>
                <div className="flex items-center gap-4 px-2 border-b border-gray-200">
                    {data.map((mrk) => {
                        const isUp = mrk.change?.dir === 'up';

                        return (
                            <div
                                key={mrk.id}
                                className="flex items-center gap-2 px-3.5 py-1.5 bg-white  border-r border-gray-200  text-sm whitespace-nowrap"
                            >
                                {/* Icon */}
                                <span className="text-base">{mrk.image}</span>

                                {/* Name */}
                                <span className="font-semibold text-gray-800">{mrk.nameBn}</span>

                                {/* Price */}
                                <span className="text-gray-600 font-medium">
                                    {mrk.today} টাকা/{mrk.unit}
                                </span>

                                {/* Percentage Change Indicator */}
                                {mrk.change && (
                                    <span
                                        className={`flex items-center gap-0.5 text-xs font-bold ${isUp ? 'text-red-600' : 'text-emerald-600'
                                            }`}
                                    >
                                        <span>{isUp ? '▲' : '▼'}</span>
                                        <span>{mrk.change.pct}%</span>
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;