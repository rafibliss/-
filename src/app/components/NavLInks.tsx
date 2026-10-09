import React from 'react';

const NavLInks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', {
        cache: "force-cache"
    })
    const items = await res.json() as { id: number | string; icon: string; nameBn: string }[];
    console.log(items)
    return (
        <nav className="w-full bg-white border-t border-b border-gray-200 py-2 px-4 ">
            <div className="max-w-7xl mx-auto flex items-center justify-start gap-2 overflow-x-auto ">
                {items.map((i) => (
                    <button
                        key={i.id}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-[5px] hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap text-gray-700 font-medium text-sm"
                    >
                        <span className="text-base">{i.icon}</span>
                        <span>{i.nameBn}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default NavLInks;