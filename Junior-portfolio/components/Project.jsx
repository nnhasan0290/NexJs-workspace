import Image from "next/image";
import Link from "next/link";
import netflix from "../public/assets/netflix.jpg";
const Project = () => {
  return (
    <div className="hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] relative group rounded-xl mb-1 shadow-xl shadow-gray-400">
      <div className="">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={netflix}
        ></Image>
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition">
        <div className="text-white hidden items-center group-hover:flex justify-around h-[120px] flex-col">
          <h3>Netflix Clone</h3>
          <h6>React JS</h6>
          <Link href="/">
            <p className="p-3 tracking-widest text-black bg-white rounded-xl cursor-pointer">More Info</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Project;
