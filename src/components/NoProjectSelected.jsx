import Button from "./Button";
import { IoIosCreate } from "react-icons/io";
const NoProjectSelected = () => {
  return (
    <div className="mt-24 w-2/3 h-2/3 rounded-md bg-zinc-100">
      <img
        className="w-[20rem] h-[15rem] object-contain mx-auto"
        src="/public/images/Project.svg"
        alt="Project Task List"
      />
      <h2
        className="text-xl font-bold text-zinc-500 mt-4 text-center
      "
      >
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-4 text-center">
        Select a project or get started with a new one
      </p>
      <p className="mt-8 ml-8 flex items-center justify-items-center justify-around">
        <Button>
          <span className="text-xl mr-1">
            <IoIosCreate />
          </span>
          Create a new project
        </Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
