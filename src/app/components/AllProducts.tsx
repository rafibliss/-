import React from 'react';
import ProductCard from './ProductCard';

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
    image: string,
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
    markets: Market[];
}

const AllProducts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
        cache: "force-cache"
    });

    const products: Product[] = await res.json();


    const increasedProducts = products.filter((p: Product) => p.change.dir === 'up');
    const decreasedProducts = products.filter((p: Product) => p.change.dir === 'down');

    return (
        <div className="max-w-6xl mx-auto w-full px-4 py-8 space-y-8">

            <section className="space-y-4">
                <h2 className="text-red-600 font-bold text-base flex items-center gap-2">
                    <span>▲</span> আজ দাম বেড়েছে
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {increasedProducts.slice(0, 6).map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>


            <section className="space-y-4">
                <h2 className="text-green-600 font-bold text-base flex items-center gap-2">
                    <span>▼</span> আজ দাম কমেছে
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {decreasedProducts.slice(0, 6).map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>


            <section id="all-products" className="space-y-4 pt-4">
                <div>
                    <h2 className="text-gray-900 font-bold text-lg">সব পণ্য</h2>
                    <p className="text-xs text-gray-500">মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AllProducts;