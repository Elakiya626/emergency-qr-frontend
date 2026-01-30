import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ScanResult = () => {
  const { qrId } = useParams();
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/auth/qr/${qrId}`)
      .then((res) => setPatient(res.data))
      .catch(() => setError("Invalid or expired QR"));
  }, [qrId]);

  if (error) return <div className="p-10 text-red-600">{error}</div>;
  if (!patient) return <div className="p-10">Loading patient data...</div>;

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          🚨 Emergency Patient Info
        </h2>

        <p><b>Name:</b> {patient.username}</p>
        <p><b>Blood Group:</b> {patient.bloodGroup}</p>
        <p><b>Allergies:</b> {patient.allergies}</p>
        <p><b>Chronic Diseases:</b> {patient.chronicDiseases}</p>
        <p><b>Sugar Level:</b> {patient.sugarLevel}</p>
        <p><b>Medicines:</b> {patient.medicines}</p>
        <p className="mt-3 text-lg font-semibold">
          📞 Emergency Contact: {patient.emergencyContact}
        </p>
      </div>
    </div>
  );
};

export default ScanResult;
