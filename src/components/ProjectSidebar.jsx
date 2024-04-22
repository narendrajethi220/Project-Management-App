import { MdAddBox } from "react-icons/md";
const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-zinc-700  md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-2xl text-white ">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md  text-blue-300 hover:bg-stone-600 hover:text-white flex items-center justify-items-center bg-white hover:bg-teal-400  ">
          <span className="mr-1  text-xl ">
            <MdAddBox />
          </span>
          <p className=" font-bold  ">Add Project</p>
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;
