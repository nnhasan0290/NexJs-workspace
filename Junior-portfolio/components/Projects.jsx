
import Project from "./Project";
import netflix from "../public/assets/netflix.jpg";

const Projects = () => {
  return (
    <div className="m-[20px] py-6">
      <h5 className="text-[#5651e5] tracking-widest">Projects</h5>
      <h2 className="py-5 capitalize">What I&apos;ve built</h2>
      <div className="grid-cols-2 gap-8 md:grid">
        <Project title="Netflix Clone" picture={netflix} />
        <Project />
        <Project />
      </div>
    </div>
  );
};
export default Projects;
