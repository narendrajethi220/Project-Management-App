import { MdAddBox } from "react-icons/md";
import Button from "./Button";
const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-zinc-700  md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-2xl text-white ">
        Your Projects
      </h2>
      <div>
        <Button>
          <span className="mr-1  text-xl ">
            <MdAddBox />
          </span>
          <p>Add Project</p>
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
