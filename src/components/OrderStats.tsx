import Image from "next/image";

const Cards = () => {
    return (
        <div className="flex flex-row pt-7 px-10 gap-5">
            <div className="flex gap-5 border rounded-md flex-col p-5">
                <div className="text-black flex gap-5 w-fill">
                    <Image
                        src={'Frame 1000002215.svg'} // Source of the image
                        alt="" // Alt text for accessibility
                        width={60} // Width of the image
                        height={60} // Height of the image
                    />
                    <div className="flex flex-col"><p>134</p>
                        <p className="text-gray-500">Total Order</p></div>
                </div>
                <hr className="w-3/4 self-center" />
                <div className="flex flex-row gap-5">
                <div className="text-black"><p>compare to yesterday</p></div>
                <div className="bg-[#CFF0E6] flex rounded-full px-2"><Image
                    src={'arrowG.svg'} // Source of the image
                    alt="" // Alt text for accessibility
                    width={20} // Width of the image
                    height={20} // Height of the image
                />
                <div className="text-[#11B282]">14%</div>
                </div>
                </div>
            </div>
            <div className="flex gap-5 border rounded-md flex-col p-5">
                <div className="text-black flex gap-5 w-fill">
                    <Image
                        src={'Frame 1000002211.svg'} // Source of the image
                        alt="" // Alt text for accessibility
                        width={60} // Width of the image
                        height={60} // Height of the image
                    />
                    <div className="flex flex-col"><p>21</p>
                        <p className="text-gray-500">Order on process</p></div>
                </div>
                <hr className="w-3/4 self-center" />
                <div className="flex flex-row gap-5">
                <div className="text-black"><p>compare to yesterday</p></div>
                <div className="bg-[#FAD7D7] flex rounded-full px-2"><Image
                    src={'arrowR.svg'} // Source of the image
                    alt="" // Alt text for accessibility
                    width={20} // Width of the image
                    height={20} // Height of the image
                />
                <div className="text-[#E53935]">14%</div>
                </div>
                </div>
            </div>
            <div className="flex gap-5 border rounded-md flex-col p-5">
                <div className="text-black flex gap-5 w-fill">
                    <Image
                        src={'Frame 100000221.svg'} // Source of the image
                        alt="" // Alt text for accessibility
                        width={60} // Width of the image
                        height={60} // Height of the image
                    />
                    <div className="flex flex-col"><p>113</p>
                        <p className="text-gray-500">Order done</p></div>
                </div>
                <hr className="w-3/4 self-center" />
                <div className="flex flex-row gap-5">
                <div className="text-black"><p>compare to yesterday</p></div>
                <div className="bg-[#FAD7D7] flex rounded-full px-2"><Image
                    src={'arrowR.svg'} // Source of the image
                    alt="" // Alt text for accessibility
                    width={20} // Width of the image
                    height={20} // Height of the image
                />
                <div className="text-[#E53935]">14%</div>
                </div>
                </div>
            </div>
            <div className="flex gap-5 border rounded-md flex-col p-5">
                <div className="text-black flex gap-5 w-fill">
                    <Image
                        src={'Frame 10000022.svg'} // Source of the image
                        alt="" // Alt text for accessibility
                        width={60} // Width of the image
                        height={60} // Height of the image
                    />
                    <div className="flex flex-col"><p>$2.096</p>
                        <p className="text-gray-500">Total income</p></div>
                </div>
                <hr className="w-3/4 self-center" />
                <div className="flex flex-row gap-5">
                <div className="text-black"><p>compare to yesterday</p></div>
                <div className="bg-[#CFF0E6] flex rounded-full px-2"><Image
                    src={'arrowG.svg'} // Source of the image
                    alt="" // Alt text for accessibility
                    width={20} // Width of the image
                    height={20} // Height of the image
                />
                <div className="text-[#11B282]">14%</div>
                </div>
                </div>
            </div>
        </div>
        
    );
};

export default Cards;
