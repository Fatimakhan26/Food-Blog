'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Junk Food Addiction
            </Link>
          </div>

        
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-purple-200 px-3 py-2 rounded-md hover:scale-105 hover:font-semibold duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-200 px-3 py-2 rounded-md hover:scale-105 hover:font-semibold duration-300">
              About
            </Link>
            <Link href="/users" className="text-white hover:text-purple-200 px-3 py-2 rounded-md hover:scale-105 hover:font-semibold duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-200 px-3 py-2 rounded-md hover:scale-105 hover:font-semibold duration-300">
              Contact
            </Link>
          </div>

         
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
           
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-white hover:text-purple-200 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-purple-200 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-purple-200 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/users"
              className="block text-white hover:text-purple-200 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

