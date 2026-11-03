import MainLayout from "../../layouts/MainLayout";

function Dashboard() {
  return (
    <MainLayout>

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Employees</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Present</h3>
          <p>95</p>
        </div>

        <div className="card">
          <h3>Absent</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Corrections</h3>
          <p>12</p>
        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;