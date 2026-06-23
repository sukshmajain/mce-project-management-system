import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TeamForm from "../components/TeamForm";

function CreateTeam() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 ml-[260px]">
        <Topbar />
        <TeamForm />
      </main>
    </div>
  );
}

export default CreateTeam;