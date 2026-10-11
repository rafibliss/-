'use client';

import ProductCard from '@/app/components/ProductCard';

import React, { useEffect, useState } from 'react';

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

interface PageProps {
    params: Promise<{ category: string }>;
}

const SingleCategory = ({ params }: PageProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
    const [sortOption, setSortOption] = useState<string>('default');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const { category } = await params;

            try {
                const res = await fetch(
                    `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`,
                    { cache: 'force-cache' }
                );
                const data: Product[] = await res.json();
                setProducts(data);
                setSortedProducts(data);
            } catch (err) {
                console.error('Failed to fetch category products:', err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [params]);


    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.value;
        setSortOption(option);

        const sortedList = [...products];

        if (option === 'lowToHigh') {
            sortedList.sort((a, b) => a.today - b.today);
        } else if (option === 'highToLow') {
            sortedList.sort((a, b) => b.today - a.today);
        }

        setSortedProducts(sortedList);
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-[70vh] w-full">
            <span className="loading loading-bars loading-lg scale-150 text-primary"></span>
        </div>
    }

    const categoryIcon = products[0]?.categoryIcon || '📦';
    const categoryTitle = products[0]?.categoryNameBn || 'ক্যাটাগরি';

    return (
        <div className='bg-[#f0f5f0] min-h-150'>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 ">

                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl shrink-0">
                        {categoryIcon}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">{categoryTitle}</h1>
                        <p className="text-xs text-gray-500 mt-0.5">
                            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>


                <div className="bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                        মোট <span className="font-semibold text-gray-900">{products.length}</span>টি পণ্য দেখানো হচ্ছে
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">সাজান</span>
                        <select
                            value={sortOption}
                            onChange={handleSortChange}
                            className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-700 outline-none cursor-pointer"
                        >
                            <option value="default">ডিফল্ট</option>
                            <option value="lowToHigh">দাম: কম থেকে বেশি</option>
                            <option value="highToLow">দাম: বেশি থেকে কম</option>
                        </select>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SingleCategory