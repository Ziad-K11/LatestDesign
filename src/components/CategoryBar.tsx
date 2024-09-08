import React from 'react';

const categories = [
    { name: 'Best Seller', icon: 'Star.svg' }, // Use appropriate icon paths
    { name: 'Ice Cream', icon: 'ice-cream.svg' },
    { name: 'Rice Bowl', icon: 'rice.svg' },
    { name: 'Coffee & Beverage', icon: 'coffee.svg' },
    { name: 'Snack', icon: 'snack.svg' },
    { name: 'Dessert', icon: 'dessert.svg' },
    { name: 'Salad', icon: 'salad.svg' },
    { name: 'Vegetarian', icon: 'leaf.svg' }
];

const CategoryBar: React.FC = () => {
    return (
        <div className="bg-white px-4 py-3 shadow-md text-black">
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-between px-10'>
                    <div>
                        <h2 className="text-lg font-semibold">Categories</h2>
                        <span className="text-sm text-gray-500 mb-2">Lorem ipsum dolor sit amet adipiscing elit</span>
                    </div>

                    <input
                        type="text"
                        placeholder="Search menu here..."
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-[500px]"
                    />

                </div>
                <div className="flex pl-10 gap-4 pt-7 mb-4">
                    {categories.map((category, index) => (
                        <button key={index} className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full">
                            <img src={category.icon} alt={category.name} className="h-5 w-5" />
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryBar;
