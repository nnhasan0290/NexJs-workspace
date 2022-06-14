import Image from "next/image";
import Javascript from "../public/assets/skills/javascript.png";
import Css from "./../public/assets/skills/css.png";
import firebase from "./../public/assets/skills/firebase.png";
import github1 from "./../public/assets/skills/github1.png";
import mongo from "./../public/assets/skills/mongo.png";
import react from "./../public/assets/skills/react.png";
import tailwind from "./../public/assets/skills/tailwind.png";
import node from "./../public/assets/skills/node.png";
const Skills = () => {
  return (
    <div id="#skills" className="p-2">
      <h5 className="text-[#5651e5] tracking-widest">Skills</h5>
      <h2 className="py-4 capitalize">What can I do</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src="/../public/assets/skills/html.png"
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>HTML</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={Css}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>CSS</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={Javascript}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>JAVASCRIPT</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={firebase}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>fIREBASE</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={node}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>NODE JS</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={mongo}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>MONGODB</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={github1}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>GITHUB</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={tailwind}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>TAILWIND</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 rounded-xl shadow-xl duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="m-auto">
            <Image
              src={react}
              width="64px"
              height="64px"
            ></Image>
          </div>
          <div className="grid justify-center items-center">
            <h3>REACT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
