import DashboardLayout from "../../layouts/DashboardLayout";

function Overview() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-4xl font-bold">
          Coordinator Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="p-4 border rounded-lg">
            <h3>Total Projects</h3>
            <p className="text-3xl font-bold">128</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3>Active Teams</h3>
            <p className="text-3xl font-bold">54</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3>Pending Reviews</h3>
            <p className="text-3xl font-bold">12</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3>Completed</h3>
            <p className="text-3xl font-bold">62</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Overview;