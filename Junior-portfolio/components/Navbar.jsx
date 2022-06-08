import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="fixed w-full shadow-xl bg-slate-400 z-[100] ">
      <div className="flex justify-between items-center">
        <Image src="/../public/assets/logo.jpg" width={100} height={50}></Image>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">about</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                contract
              </li>
            </Link>
          </ul>
        </div>
        <AiOutlineMenu className="md:hidden" size={25}/>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/30">
         <div className="w-[50%] bg-white h-screen top-0 fixed">
          <div className="flex justify-between items-center m-2 rounded-sm shrink-1">
            <Image src="/../public/assets/logo.jpg" width={60} height={40} className="object-contain"/>
            <div className="p-2 rounded-full border shadow-lg shadow-gray-400 cursor-pointer">
            <AiOutlineClose />
            </div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
