import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

const PatientForm = () => {
  const location = useLocation();
  const username = location.state?.username;

  const [form, setForm] = useState({
    bloodGroup: "",
    allergies: "",
    chronicDiseases: "",
    sugarLevel: "",
    medicines: "",
    emergencyContact: "",
  });

  const [qrId, setQrId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert("Session expired. Please login again.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/patient-details",
        {
          username,
          ...form,
        }
      );

      setQrId(res.data.qrId);
      alert("Patient details saved & QR generated!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to save details");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Patient Medical Details
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              required
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}

          <button
            type="submit"
            className="bg-purple-700 text-white py-3 rounded hover:bg-purple-800 transition"
          >
            Save & Generate QR
          </button>
        </form>

        {/* QR CARD */}
        {qrId && (
          <div className="mt-8 text-center">
            <h3 className="font-bold text-lg mb-3">
              Emergency QR ID Card
            </h3>

            <div className="border rounded-xl p-4 shadow-md bg-gray-50">
              <p className="font-semibold mb-1">Username: {username}</p>

              <p className="text-red-600 font-bold text-xl mb-2">
                Blood Group: {form.bloodGroup}
              </p>

              <QRCode
                value={`http://localhost:3000/scan/${qrId}`}
                size={180}
              />

              <p className="mt-3 font-medium">
                📞 Emergency Contact: {form.emergencyContact}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Scan this QR to view full medical details
              </p>
            </div>

            <button
  onClick={() => {
    const data = `
Emergency Medical Details
-------------------------
Name: ${username}
Blood Group: ${form.bloodGroup}
Allergies: ${form.allergies}
Chronic Diseases: ${form.chronicDiseases}
Sugar Level: ${form.sugarLevel}
Medicines: ${form.medicines}
Emergency Contact: ${form.emergencyContact}
`;

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Emergency_Medical_Details.txt";
    a.click();

    URL.revokeObjectURL(url);
  }}
  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
>
  Download Emergency Details
</button>

          </div>
        )}

      </div>
    </div>
  );
};

export default PatientForm;
