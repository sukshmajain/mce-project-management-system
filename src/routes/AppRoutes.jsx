import { BrowserRouter, Routes, Route } from "react-router-dom";

import Overview from "../pages/coordinator/Overview";
import GroupsTeams from "../pages/coordinator/GroupsTeams";
import CreateGroup from "../pages/coordinator/CreateGroup";
import CreateTeam from "../pages/coordinator/CreateTeam";
import MonitorProjects from "../pages/coordinator/MonitorProjects";
import Analytics from "../pages/coordinator/Analytics";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/groups" element={<GroupsTeams />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/create-team" element={<CreateTeam />} />
        <Route path="/monitor" element={<MonitorProjects />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;