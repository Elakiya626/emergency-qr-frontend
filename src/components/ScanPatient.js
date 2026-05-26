import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ScanPatient = () => {
  const { qrId } = useParams();

  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get(
          `http://10.55.27.22:5000/api/patient/${qrId}`
        );

        setPatient(res.data);

      } catch (err) {
        setError("Patient not found");
      }
    };

    fetchPatient();
  }, [qrId]);

  const downloadPDF = () => {
    const input = document.getElementById("medical-card");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);

      pdf.save("EmergencyMedicalCard.pdf");
    });
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-red-600 text-2xl font-bold">
          {error}
        </h2>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Loading Emergency Data...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-indigo-50 flex justify-center items-center p-6">

      <div
        id="medical-card"
        className="bg-white shadow-2xl rounded-[35px] overflow-hidden max-w-2xl w-full border border-red-100"
      >

        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-8">

          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-4xl font-extrabold">
                🚑 Emergency Medical Card
              </h1>

              <p className="mt-2 text-red-100">
                Emergency Healthcare Information
              </p>
            </div>

            <div className="bg-white text-red-600 px-6 py-3 rounded-2xl font-bold text-2xl shadow-lg">
              {patient.bloodGroup}
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6">

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-red-50 p-5 rounded-2xl">
              <h2 className="font-bold text-red-700 mb-2">
                Allergies
              </h2>

              <p>{patient.allergies}</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-2xl">
              <h2 className="font-bold text-yellow-700 mb-2">
                Chronic Diseases
              </h2>

              <p>{patient.chronicDiseases}</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-2xl">
              <h2 className="font-bold text-blue-700 mb-2">
                Medicines
              </h2>

              <p>{patient.medicines}</p>
            </div>

            <div className="bg-green-50 p-5 rounded-2xl">
              <h2 className="font-bold text-green-700 mb-2">
                Emergency Contact
              </h2>

              <p className="font-bold text-xl">
                📞 {patient.emergencyContact}
              </p>
            </div>

          </div>

          {/* WARNING */}
          <div className="bg-red-100 border border-red-300 p-5 rounded-2xl">

            <h2 className="font-bold text-red-700 text-lg mb-2">
              ⚠ Critical Emergency Information
            </h2>

            <p className="text-red-800">
              Please review allergies and chronic diseases
              before administering treatment.
            </p>

          </div>

          {/* DOWNLOAD */}
          <button
            onClick={downloadPDF}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
          >
            Download Emergency PDF
          </button>

        </div>

      </div>

    </div>
  );
};

export default ScanPatient;