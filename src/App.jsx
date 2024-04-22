// import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import "./index.css";
const App = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
};

export default App;
