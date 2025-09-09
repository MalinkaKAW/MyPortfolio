"use client"; // for Next.js App Router if you're adding interactivity

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/projects" className="hover:text-gray-200">Projects</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-2">
          <Link href="/" className="block hover:text-gray-200">Home</Link>
          <Link href="/about" className="block hover:text-gray-200">About</Link>
          <Link href="/projects" className="block hover:text-gray-200">Projects</Link>
          <Link href="/contact" className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
