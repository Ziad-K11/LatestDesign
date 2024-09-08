import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white text-[#667085] p-4">
            <div className="flex justify-between items-center flex-row px-10 py-5">
                <Image
                    src="/Group 1.svg"
                    width={100}
                    height={40}
                    alt="Logo" />
                <nav>
                    <div className='flex gap-11'>
                        <ul className="flex space-x-4 gap-11">
                            <li><Link href="/" className="hover:text-black">Home</Link></li>
                            <li><Link href="/orders" className="hover:text-black">Orders</Link></li>
                            <li><Link href="#" className="hover:text-black">Customers</Link></li>
                            <li><Link href="#" className="hover:text-black">Settings</Link></li>
                        </ul>
                        <div className='flex flex-row gap-4'>
                            <Image
                                src="/Frame 1000002212.svg"
                                width={36}
                                height={36}
                                alt="Logo" />
                            <Image
                                src="/Frame 1000001740.svg"
                                width={151}
                                height={36}
                                alt="Logo" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
