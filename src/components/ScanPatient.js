import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ScanPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/patient/${id}`
        );
        setPatient(res.data);
      } catch (err) {
        setError("Patient not found");
      }
    };
    fetchPatient();
  }, [id]);

  if (error) {
    return <h2 className="text-center mt-10 text-red-600">{error}</h2>;
  }

  if (!patient) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          🚑 Emergency Patient Info
        </h2>

        <p><b>Blood Group:</b> {patient.bloodGroup}</p>
        <p><b>Allergies:</b> {patient.allergies}</p>
        <p><b>Chronic Diseases:</b> {patient.chronicDiseases}</p>
        <p><b>Medicines:</b> {patient.medicines}</p>
        <p className="text-red-600 font-bold mt-3">
          📞 Emergency: {patient.emergencyContact}
        </p>
      </div>
    </div>
  );
};

export default ScanPatient;
