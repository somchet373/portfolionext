"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-extrabold drop-shadow-md">TCAS Portfolio</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="px-3 py-1 rounded text-white hover:bg-blue-500 transition-colors">
              ฟอร์มสมัคร
            </Link>
            <Link href="/teacher" className="px-3 py-1 rounded text-white hover:bg-blue-500 transition-colors">
              หน้าครู
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
            >
              {open ? (
                <span className="text-2xl">&#10005;</span> // ✖
              ) : (
                <span className="text-2xl">&#9776;</span> // ☰
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded text-white hover:bg-blue-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            ฟอร์มสมัคร
          </Link>
          <Link
            href="/teacher"
            className="block px-3 py-2 rounded text-white hover:bg-blue-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            หน้าครู
          </Link>
        </div>
      )}
    </nav>
  );
}
