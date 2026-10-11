import ProductDetail from '@/app/components/ProductDetail';
// import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
    params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
    const { id } = await params
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`, {
        cache: "force-cache"
    })
    const product = await res.json();

    return (
        <div>
            <ProductDetail product={product}></ProductDetail>

        </div>
    );
};

export default ProductDetailPage;