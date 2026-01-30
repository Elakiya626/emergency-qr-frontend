import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUserData(data);
  }, []);

  if (!userData) {
    return <p className="text-center mt-10">No data found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🧑‍⚕️ Patient Dashboard
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* LEFT - PATIENT DETAILS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Patient Information
          </h2>

          <p><b>Username:</b> {userData.username}</p>
          <p><b>Blood Group:</b> {userData.bloodGroup}</p>
          <p><b>Allergies:</b> {userData.allergies}</p>
          <p><b>Chronic Diseases:</b> {userData.chronicDiseases}</p>
          <p><b>Sugar Level:</b> {userData.sugarLevel}</p>
          <p><b>Medicines:</b> {userData.medicines}</p>
          <p><b>Emergency Contact:</b> {userData.emergencyContact}</p>
        </div>

        {/* RIGHT - QR */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-bold mb-4 text-indigo-600">
            Emergency QR Code
          </h2>

          <img
            src={userData.qrData}
            alt="QR Code"
            className="mx-auto w-48"
          />

          <p className="mt-4 text-gray-600">
            Scan this QR to access emergency medical details
          </p>

          <button
            onClick={() => window.print()}
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Print QR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
