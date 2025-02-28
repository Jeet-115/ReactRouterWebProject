import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t">
    <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="flex items-center justify-center md:justify-start">
                <Link to="/">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className="h-16 transition-transform hover:scale-105"
                        alt="Logo"
                    />
                </Link>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://github.com/hiteshchoudhary" target="_blank" rel="noopener noreferrer"
                               className="text-gray-600 hover:text-gray-900 transition">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-900 transition">Discord</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="#" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-600 hover:text-gray-900 transition">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-gray-600 text-sm">
            <span>© 2023 <a href="https://hiteshchoudhary.com/" className="hover:text-gray-900">hiteshchoudhary</a>. All Rights Reserved.</span>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
                <Link to="#" className="hover:text-gray-900 transition">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="hover:text-gray-900 transition">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="hover:text-gray-900 transition">
                    <i className="fab fa-discord"></i>
                </Link>
            </div>
        </div>
    </div>
</footer>

    );
}