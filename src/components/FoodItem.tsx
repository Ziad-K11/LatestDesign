import Image from 'next/image';
import React from 'react';

interface FoodItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const FoodItem = ({ image, title, description, price }: FoodItemProps) =>  {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <div className="relative h-40 w-40 mb-3 flex">
        <Image src={image} alt={title} layout="fill" objectFit="fill"/>
        <button className='absolute translate-x-28'>
        <Image src={'Cart.svg'} alt='Cart' width={60} height={60} />
      </button>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <span className="text-lg font-bold">{price}</span>
    </div>
  );
}

export default FoodItem;
