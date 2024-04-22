import Input from "./Input";
const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16 p-1">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="bg-orange-400 text-white p-1 px-2 rounded-md font-bold hover:bg-red-400 active:text-red-400 active:bg-white">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md font-bold hover:bg-green-400 active:bg-white active:text-green-400">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Data" />
      </div>
    </div>
  );
};

export default NewProject;
