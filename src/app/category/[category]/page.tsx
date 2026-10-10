import ProductCard from '@/app/components/ProductCard';
import React from 'react';

interface PageProps {
    params: Promise<{ category: string }>;
}

const SingleCategory = async ({ params }: PageProps) => {

    const { category } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`,
        {
            cache: 'force-cache',
        }
    );

    const products = await res.json();
    const categoryIcon = products[0]?.categoryIcon || '📦';
    const categoryTitle = products[0]?.categoryNameBn || category;

    return (
        <div className='bg-[#f0f5f0]'>
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">


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
                        <select className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-xs text-gray-700 outline-none cursor-pointer">
                            <option>ডিফল্ট</option>
                            <option>দাম: কম থেকে বেশি</option>
                            <option>দাম: বেশি থেকে কম</option>
                        </select>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SingleCategory;