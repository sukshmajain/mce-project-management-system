import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [category, setCategory] = useState("");
  const [guide, setGuide] = useState("");
  const [phase1, setPhase1] = useState("");
  const [phase2, setPhase2] = useState("");
  const [phase3, setPhase3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const groupData = {
      groupName,
      category,
      guide,
      phase1,
      phase2,
      phase3,
    };

    console.log(groupData);

    alert("Group Created Successfully!");
  };

  return (
    <DashboardLayout>
      <div style={{ padding: "30px" }}>
        <h1>Create New Group</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Group Name</label>
            <br />
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter Group Name"
            />
          </div>

          <br />

          <div>
            <label>Project Category</label>
            <br />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="AI">AI</option>
              <option value="Web Development">Web Development</option>
              <option value="IoT">IoT</option>
            </select>
          </div>

          <br />

          <div>
            <label>Faculty Guide</label>
            <br />
            <select
              value={guide}
              onChange={(e) => setGuide(e.target.value)}
            >
              <option value="">Select Guide</option>
              <option value="Dr. Kumar">Dr. Kumar</option>
              <option value="Dr. Priya">Dr. Priya</option>
              <option value="Dr. Sharma">Dr. Sharma</option>
            </select>
          </div>

          <br />

          <div>
            <label>Phase 1 Deadline</label>
            <br />
            <input
              type="date"
              value={phase1}
              onChange={(e) => setPhase1(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Phase 2 Deadline</label>
            <br />
            <input
              type="date"
              value={phase2}
              onChange={(e) => setPhase2(e.target.value)}
            />
          </div>

          <br />

          <div>
            <label>Phase 3 Deadline</label>
            <br />
            <input
              type="date"
              value={phase3}
              onChange={(e) => setPhase3(e.target.value)}
            />
          </div>

          <br />

          <button type="submit">
            Create Group
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default CreateGroup;