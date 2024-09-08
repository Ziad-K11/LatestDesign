"use client"; // This marks the component as a client component

import { useState } from 'react';
import Image from 'next/image'; // Use next/image if you're using Next.js

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
            >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        src={'profile.svg'} // Path to the profile image
                        alt="Profile Picture"
                        width={48}
                        height={48}
                        className="object-cover"
                    />
                </div>
                <div className="text-left">
                    <p className="font-bold text-black">Aaron Ødegaard</p>
                    <p className="text-sm text-gray-500">Cashier</p>
                </div>
                {/* Custom Arrow */}
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <Image
                        src={'arrow-down.svg'} // Path to your custom arrow image
                        alt="Dropdown Arrow"
                        width={16}
                        height={16}
                    />
                </div>
            </button>


        </div>
    );
};

export default ProfileDropdown;
