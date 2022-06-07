import Image from "next/image";
const Navbar = () => {
  return (
    <div className="fixed w-full shadow-xl bg-slate-400 z-[100] ">
      <div className="">
        <Image src="/../public/assets/logo.jpg" width={100} height={50}></Image>
      </div>
    </div>
  );
};

export default Navbar;
