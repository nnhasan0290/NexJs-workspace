import { FaFacebook, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen capitalize">
      <p className="pb-4 uppercase">Let's build something together...</p>
      <h1 className="pb-4 text-center">
        {" "}
        hi, I'm <span className="text-[#5651e5]">NazmuL</span>{" "}
      </h1>
      <h1 className="pb-4 max-w-[80%] text-center">
        A Front-End Web Developer
      </h1>
      <p className="max-w-[70%] text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate in,
        congue suscipit eleifend proin nullam potenti conubia. Congue ornare leo
        id blandit fusce fames eget vitae, nam quis ac magnis sagittis
      </p>
      <div className="pt-10 w-60">
        <div className="flex flex-row justify-between items-center my-3">
          <div className="p-3 rounded-full border shadow-lg duration-200 ease-in cursor-pointer shadow-gray-400 hover:scale-110">
            <FaLinkedinIn />
          </div>
          <div className="p-3 rounded-full border shadow-lg duration-200 ease-in cursor-pointer shadow-gray-400 hover:scale-110">
            <FaGithub />
          </div>
          <div className="p-3 rounded-full border shadow-lg duration-200 ease-in cursor-pointer shadow-gray-400 hover:scale-110">
            <FaFacebook />
          </div>
          <div className="p-3 rounded-full border shadow-lg duration-200 ease-in cursor-pointer shadow-gray-400 hover:scale-110">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
