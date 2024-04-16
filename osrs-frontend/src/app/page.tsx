import Link from "next/link";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[url('/runescape-bg.jpg')] bg-cover bg-center">
            <nav className='bg-black bg-opacity-60'>
                <div className='max-w-6xl mx-auto px-4 py-2 flex justify-between items-center'>
                    <div className='text-white'>
                        <Link href='/' className='font-bold text-xl'>
                            OSRS-Marketplace
                        </Link>
                    </div>
                    <div>
                        <Link
                            href='/marketplace'
                            className='text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        >
                            Marketplace
                        </Link>
                        <Link
                            href='/about'
                            className='text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        >
                            About
                        </Link>
                        <Link
                            href='/learn'
                            className='text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        >
                            Learn More
                        </Link>
                        <Link
                            href='/affiliate'
                            className='text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        >
                            Affiliate
                        </Link>
                    </div>
                    <div>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                            Login
                        </button>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>

            <main className='flex flex-col items-center justify-center text-center h-full'>
                <h1 className='text-4xl text-white font-bold drop-shadow-md'>
                    Welcome to OSRS-Marketplace
                </h1>
                <p className='text-xl text-gray-200 mt-4'>
                    Your ultimate hub for buying and selling OSRS gold
                </p>
                <div className='mt-8'>
                    <Link
                        href='/marketplace'
                        className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-lg'
                    >
                        Explore Marketplace
                    </Link>
                </div>
            </main>

            <footer className='absolute bottom-0 w-full text-center text-sm text-gray-200 p-4 bg-black bg-opacity-60'>
                © 2024 OSRS-Marketplace. All rights reserved.
            </footer>
        </div>
    );
}
