import Image from "next/image";

const Orders = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center text-black">
            <div className="bg-white shadow-lg rounded-lg m-10 max-w-7xl w-full px-8 py-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-xl font-semibold">Order List</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet adipiscing elit</p>
                    </div>
                    <button className="bg-[#E6EFFF] hover:bg-blue-300 text-[#005CFF] font-bold py-2 px-4 rounded-xl">
                        <div className="flex gap-2">
                            <Image
                                src={'SortAscending.svg'} // Source of the image
                                alt="" // Alt text for accessibility
                                width={20} // Width of the image
                                height={20} // Height of the image
                            />

                            Date & Time
                        </div>
                    </button>
                </div>
                <div className="overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-transparent">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Queue ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Customer
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service Type
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Item Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    QTY
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #QN0067
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Nov 21, 2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Customer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Delivery
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Item Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-[#005CFF] gap-1">
                                        NEW
                                        <Image
                                            src={'CaretDown.svg'} // Source of the image
                                            alt="" // Alt text for accessibility
                                            width={12} // Width of the image
                                            height={12} // Height of the image
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Subtotal
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #QN0067
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Nov 21, 2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Customer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Delivery
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Item Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-[#005CFF] gap-1">
                                        NEW
                                        <Image
                                            src={'CaretDown.svg'} // Source of the image
                                            alt="" // Alt text for accessibility
                                            width={12} // Width of the image
                                            height={12} // Height of the image
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Subtotal
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #QN0067
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Nov 21, 2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Customer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Delivery
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Item Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-[#FECC32] gap-1">
                                        ON PROCESS
                                        <Image
                                            src={'CaretDownY.svg'} // Source of the image
                                            alt="" // Alt text for accessibility
                                            width={12} // Width of the image
                                            height={12} // Height of the image
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Subtotal
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #QN0067
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Nov 21, 2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Customer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Delivery
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Item Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#11B282] gap-1">
                                        DONE
                                        <Image
                                            src={'CaretDownG.svg'} // Source of the image
                                            alt="" // Alt text for accessibility
                                            width={12} // Width of the image
                                            height={12} // Height of the image
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Subtotal
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #QN0067
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Nov 21, 2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Customer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Delivery
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Item Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#11B282] gap-1">
                                        DONE
                                        <Image
                                            src={'CaretDownG.svg'} // Source of the image
                                            alt="" // Alt text for accessibility
                                            width={12} // Width of the image
                                            height={12} // Height of the image
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Subtotal
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    #QN0067
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Nov 21, 2023
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Customer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Delivery
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Item Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-[#11B282] gap-1">
                                        DONE
                                        <Image
                                            src={'CaretDownG.svg'} // Source of the image
                                            alt="" // Alt text for accessibility
                                            width={12} // Width of the image
                                            height={12} // Height of the image
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Subtotal
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Orders;