
import React from 'react';
import Hero from './components/Hero';
import AllProducts from './components/AllProducts';

const page = () => {
  return (
    <div className="bg-[#f4f7f4] flex-1 w-full flex flex-col justify-center py-8">
      <Hero />
      <AllProducts></AllProducts>
    </div>
  );
};

export default page;