import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-4 sm:py-16 py-10 bg-gray-100 shadow-lg">
                <div className="relative z-10 max-w-screen-xl px-6 sm:px-10 py-20 sm:py-24 mx-auto">
                    <div className="max-w-xl sm:mt-1 mt-40 space-y-6 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
                            Download Now
                            <span className="hidden sm:block text-orange-700">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex items-center gap-2 px-6 py-3 font-medium bg-orange-700 text-white rounded-lg shadow-md transition hover:bg-orange-800"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0 flex justify-center items-center sm:mt-10">
                    <img className="w-72 sm:w-96 opacity-80" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            {/* Secondary Image Section */}
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            {/* Footer Text */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold text-gray-900">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}
