"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { GiLovers } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-md px-4 md:px-8 py-4 relative z-50">
      <div className="container">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between lg:hidden w-full relative">
          {/* Logo */}
          <Image src="/Afaq1.png" alt="Logo" width={50} height={60} />

          {/* Donate button centered */}
          <button
            className="absolute w-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              flex items-center justify-center 
            bg-zinc-600 text-white font-bold px-4 h-10 
              rounded-full hover:bg-zinc-700 hover:scale-105 shadow-lg transition-all 
              text-sm cursor-pointer z-10 animate-pulse"
          >
            <GiLovers className="ml-2 text-xl" />
            تبرع الآن
          </button>

          {/* Menu toggle button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-20"
          >
            {menuOpen ? (
              <IoMdClose className="text-3xl text-zinc-700" />
            ) : (
              <HiMenu className="text-3xl text-zinc-700" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <Image src="/Afaq1.png" alt="Logo" width={50} height={60} />

          {/* Menu items */}
          <ul className="flex gap-6 text-lg">
            <Link
              className={`${
                pathname === "/" ? "font-bold" : "text-black"
              } transition`}
              href={"/"}
            >
              الصفحة الرئيسية
            </Link>
            <li>
              <Link
                className={`${
                  pathname === "/aboutus" ? "font-bold" : "text-black"
                } transition`}
                href={"/aboutus"}
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/humancases" ? "font-bold" : "text-black"
                } transition`}
                href={"/humancases"}
              >
                الحالات الإنسانية
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/campaigns" ? "font-bold" : "text-black"
                } transition`}
                href={"/campaigns"}
              >
                الحملات
              </Link>
            </li>
            <li>الإنجازات</li>
            <li>انضم إلينا</li>
            <li>تواصل معنا</li>
          </ul>

          {/* Donate button */}
          <button
            className="flex items-center gap-2 cursor-pointer 
            bg-zinc-600 text-white font-bold px-6 h-11 
            rounded-full hover:bg-zinc-700 hover:scale-105 shadow-md transition-all"
          >
            <GiLovers className="text-xl" />
            تبرع الآن
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="grid gap-4 text-center py-4 text-lg">
            <li className="font-bold">
              <Link
                className={`${
                  pathname === "/" ? "font-bold" : "text-black"
                } transition`}
                href={"/"}
              >
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/aboutus" ? "font-bold" : "text-black"
                } transition`}
                href={"/aboutus"}
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/humancases" ? "font-bold" : "text-black"
                } transition`}
                href={"/humancases"}
              >
                الحالات الإنسانية
              </Link>
            </li>
            <li>الحملات</li>
            <li>الإنجازات</li>
            <li>انضم إلينا</li>
            <li>تواصل معنا</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
