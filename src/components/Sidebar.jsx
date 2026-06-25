import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#a63d00",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2>MCE Portal</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/" style={{ color: "white" }}>
          Overview
        </Link>

        <Link to="/groups" style={{ color: "white" }}>
          Groups & Teams
        </Link>

        <Link to="/create-group" style={{ color: "white" }}>
          Create Group
        </Link>

        <Link to="/create-team" style={{ color: "white" }}>
          Create Team
        </Link>

        <Link to="/monitor" style={{ color: "white" }}>
          Monitor Projects
        </Link>

        <Link to="/analytics" style={{ color: "white" }}>
          Analytics
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;