import Input from "./Input";
const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex ">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
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
