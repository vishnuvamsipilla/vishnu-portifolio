import Image from "next/image";
import Link from "next/link";

let troven = "/assets/projects/troven.png";
let koneqto = "/assets/projects/koneqto.png";
let goodschool = "/assets/projects/goodschool.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Koneqto App"
            backgroundImg={koneqto}
            projectUrl="https://koneqto.com/"
            tech="Next JS"
          />
          <ProjectItem
            title="Good School App"
            backgroundImg={goodschool}
            projectUrl="https://www.goodschoolapp.com/"
            tech="React JS"
          />

          <ProjectItem
            title="Troven App"
            backgroundImg={troven}
            projectUrl="https://trovenfe.smartinternz.com/"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
