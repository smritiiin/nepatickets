import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        NepaTickets
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/events" className="text-gray-700 hover:text-blue-600">
                            Events
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex space-x-4">
                        <Link href="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                            Login
                        </Link>
                        <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}