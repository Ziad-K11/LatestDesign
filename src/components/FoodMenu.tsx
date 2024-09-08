"use client";
import React, { useState } from 'react';
import FoodItem from './FoodItem';

interface FoodData {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string;
}

const foodData: FoodData[] = [
    { id: 1, image: "Burger.svg", title: "American Style Burger", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 2, image: "pokebowl.svg", title: "Hawaiian Pokebowl", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 3, image: "Curry.svg", title: "Chicken Curry Katsu", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 4, image: "Sushi.svg", title: "Sushi Platter", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 5, image: "Pancake.svg", title: "Blueberry Cheese Pancake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 6, image: "Baked.svg", title: "Croissant Set", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 7, image: "Taco.svg", title: "Chicken Taco", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" },
    { id: 8, image: "Cake.svg", title: "Grandma’s Carrot Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: "$27.09/portion" }

    // Add more items as per your data
];

const FoodMenu = () => {

    const [sortedItems, setSortedItems] = useState<FoodData[]>(foodData);

    const sortItems = () => {
        const newSortedItems = [...sortedItems].sort((a, b) => a.title.localeCompare(b.title));
        setSortedItems(newSortedItems);
    };
    return (
        <div className="py-10 bg-gray-100 text-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className='flex px-10 pb-7 justify-between'>
                    <div className='flex flex-col'>
                        <span className="text-2xl font-bold">Rice Bowl Category</span>
                        <span className='text-[#667085]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>

                    <button onClick={sortItems} className="text-blue-500 hover:text-blue-700 bg-[#E6EFFF] flex items-center px-6 rounded-xl py-3">
                        <img src="SortAscending.svg" alt="" className='w-5 h-5' />
                        A-Z Sort
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedItems.map(item => (
                        <FoodItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FoodMenu;
