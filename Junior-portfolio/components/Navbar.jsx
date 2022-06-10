import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  //Diclaration
  const [nav, setNav] = useState(false);
  //Functions
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full shadow-xl bg-slate-400 z-[100] ">
      <div className="flex justify-between items-center">
        <Image src="/../public/assets/logo.jpg" width={100} height={50}></Image>
        <div>
          <ul className="hidden lg:flex">
            <Link href="/">
              <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                about
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm font-bold uppercase hover:border-b">
                contract
              </li>
            </Link>
          </ul>
        </div>
        <AiOutlineMenu
          onClick={() => {
            handleNav();
          }}
          className="cursor-pointer lg:hidden"
          size={25}
        />
      </div>
      <div
        className={nav ? "fixed top-0 left-0 w-full h-screen bg-black/30" : ""}
      >
        <div
          className={
            nav
              ? "w-[70%] md:w-[50%] bg-white h-screen top-0 fixed px-5 left-0 ease-in duration-500"
              : "w-[70%] md:w-[50%] bg-white h-screen top-0 fixed px-5 left-[-100%] ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center m-2 rounded-sm">
            <Image
              src="/../public/assets/logo.jpg"
              width={60}
              height={40}
              className="object-contain"
            />
            <div onClick={handleNav} className="p-2 rounded-full border shadow-lg cursor-pointer shadow-gray-400">
              <AiOutlineClose  />
            </div>
          </div>
          <div className="mx-4">
            <p className="py-4 border-b">
              Let's build somethng legendary together..
            </p>
            <div>
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm font-bold">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm font-bold">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm font-bold">skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm font-bold">projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm font-bold">contract</li>
                </Link>
              </ul>
            </div>
            <div className="hidden pt-20 sm:block">
              <p className="tracking-widest uppercase">Let's connect</p>
              <div className="flex flex-row justify-between my-3 w-[70%]">
                <div className="p-3 rounded-full border shadow-lg cursor-pointer shadow-gray-400">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 rounded-full border shadow-lg cursor-pointer shadow-gray-400">
                  <FaGithub />
                </div>
                <div className="p-3 rounded-full border shadow-lg cursor-pointer shadow-gray-400">
                  <FaFacebook />
                </div>
                <div className="p-3 rounded-full border shadow-lg cursor-pointer shadow-gray-400">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
